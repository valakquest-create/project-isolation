/* eslint-disable @typescript-eslint/no-unused-vars */
interface Order {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date;
  confirmed: boolean;
  closed: boolean;
  eventId: string;
  name: string;
  phone: string;
  personCount: number;
  questId: number;
}

interface CreateOrderCommand {
  dateTime: Date;
  name: string;
  phone: string;
  personCount: number;
  questId: number;
}

interface CreateOrderRequest {
  dateTimeString: string;
  name: string;
  phone: string;
  personCount: number;
  questId: number;
  policy: true | undefined;
}

interface ConfirmOrderCommand {
  id: number;
  confirmed: boolean;
  eventId: string;
}

interface CloseOrderCommand {
  id: number;
  closed: boolean;
  eventId: string;
}

interface DeleteOrderCommand {
  id: number;
}

interface GetOrderByIdCommand {
  id: number;
}
