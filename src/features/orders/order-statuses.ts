import { orderRepository } from "@/entities/order";
import { questRepository } from "@/entities/quest";
import { insertEvent, deleteEvent } from "@/shared/api/calendar";
import { base32id } from "@/shared/lib/id";

export async function changeOrderConfirmation(id: number, confirmed: boolean) {
  if (confirmed) {
    const eventId = base32id();

    const order = await orderRepository.changeOrderConfirmation({
      id,
      confirmed,
      eventId,
    });

    if (!order) {
      return;
    }

    const quest = await questRepository.getQuestById({
      id: order.questId,
      isPageIncluded: false,
    });

    await insertEvent(order, "confirm", quest!);
  } else {
    const order = await orderRepository.getOrderById({ id });

    if (!order) {
      return;
    }

    await deleteEvent(order.eventId, "confirm");

    await orderRepository.changeOrderConfirmation({
      id,
      confirmed,
      eventId: "",
    });
  }
}

export async function changeOrderClosing(id: number, closed: boolean) {
  if (closed) {
    const eventId = base32id();

    const order = await orderRepository.closeOrder({
      id,
      closed,
      eventId,
    });

    if (!order) {
      return;
    }

    const quest = await questRepository.getQuestById({
      id: order.questId,
      isPageIncluded: false,
    });

    await insertEvent(order, "close", quest!);
  } else {
    const order = await orderRepository.getOrderById({ id });

    if (!order) {
      return;
    }

    await deleteEvent(order.eventId, "close");

    await orderRepository.closeOrder({
      id,
      closed,
      eventId: "",
    });
  }
}
