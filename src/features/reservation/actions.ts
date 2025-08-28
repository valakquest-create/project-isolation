"use server";

import { orderRepository } from "@/entities/order";
import { questRepository } from "@/entities/quest";
import { sendLogsToTg, sendOrderToTg } from "@/shared/api/tg";
import { checkIsAvailable } from "@/shared/lib/datetime";

export const createOrder = async (request: CreateOrderRequest) => {
  const { dateTimeString, policy, ...rest } = request;

  const quest = await questRepository.getQuestById({
    id: rest.questId,
    isPageIncluded: false,
    isAddressIncluded: true,
  });

  if (!quest) {
    return "Квест не найден. Невозможно забронировать это событие";
  }

  if (!quest.isActive) {
    return "Квест закрыт для записи. Невозможно забронировать это событие";
  }

  if (!policy) {
    return "Вы должны согласиться с политикой конфиденциальности, чтобы продолжить";
  }

  if (!checkIsAvailable(dateTimeString, new Date())) {
    return "Оператор не может принять заявку на ближайшее событие.";
  }

  try {
    const newOrder = await orderRepository.createOrder({
      ...rest,
      dateTime: new Date(dateTimeString),
    });

    sendOrderToTg(newOrder, quest);
  } catch (err) {
    console.log("Create order error: ", err);
    console.log("Incoming data: ", request);

    await sendLogsToTg(err, request);

    return "При отправке формы произошла ошибка";
  }
};
