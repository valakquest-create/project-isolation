"use server";

// import { revalidatePath } from "next/cache";
import { orderRepository } from "@/entities/order";
import { changeOrderClosing, changeOrderConfirmation } from "./order-statuses";

export const handleConfirmAction = async (id: number, confirmed: boolean) => {
  "use server";

  await changeOrderConfirmation(id, confirmed);
  // revalidatePath(revalidatePagePath);
};

export const handleCloseAction = async (id: number, closed: boolean) => {
  "use server";

  await changeOrderClosing(id, closed);
  // revalidatePath(revalidatePagePath);
};

export const handleDeleteAction = async (id: number) => {
  "use server";

  await orderRepository.deleteOrder({ id });
  // revalidatePath(revalidatePagePath);
};
