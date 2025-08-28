import { cache } from "react";
import { dbClient } from "@/shared/lib/db";

class OrderRepository {
  createOrder = (command: CreateOrderCommand): Promise<Order> =>
    dbClient.order.create({
      data: command,
    });

  getAllOrders = cache(
    (): Promise<Order[]> =>
      dbClient.order.findMany({
        orderBy: {
          createdAt: "desc",
        },
      }),
  );

  getOrdersWithQuest = cache(
    (): Promise<(Order & { quest: Quest | null })[]> =>
      dbClient.order.findMany({
        include: {
          quest: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
  );

  getOrderById = (command: GetOrderByIdCommand): Promise<Order | null> =>
    dbClient.order.findUnique({
      where: {
        id: command.id,
      },
    });

  changeOrderConfirmation = (
    command: ConfirmOrderCommand,
  ): Promise<Order | null> =>
    dbClient.order.update({
      where: {
        id: command.id,
      },
      data: {
        confirmed: command.confirmed,
        eventId: command.eventId,
      },
    });

  closeOrder = (command: CloseOrderCommand): Promise<Order | null> =>
    dbClient.order.update({
      where: {
        id: command.id,
      },
      data: {
        closed: command.closed,
        eventId: command.eventId,
      },
    });

  deleteOrder = (command: DeleteOrderCommand): Promise<Order | null> =>
    dbClient.order.delete({
      where: {
        id: command.id,
      },
    });
}

export const orderRepository = new OrderRepository();
