"use server";

import { revalidatePath } from "next/cache";
import { certificateOrderRepository } from "@/entities/certificate-order";
import { sendCertToTg } from "@/shared/api/tg";

export const createCertificateOrder = async (
  request: CreateCertificateRequest,
) => {
  const { policy, ...command } = request;

  if (!policy) {
    return "Вы должны согласиться с политикой конфиденциальности, чтобы продолжить";
  }

  try {
    const response =
      await certificateOrderRepository.createCertificateOrder(command);

    revalidatePath("/admin/certificate-orders");
    sendCertToTg(response);

    return "Заявка успешно отправлена";
  } catch (err) {
    console.log("Create certificate order error: ", err);

    return "При отправке формы возникла ошибка";
  }
};
