"use server";

import { revalidatePath } from "next/cache";
import { contactsRepository } from "./api";

export const createContactAction = async (
  command: CreateContactItemCommand,
  revalidatePagePath: string,
) => {
  await contactsRepository.createContact(command);
  revalidatePath(revalidatePagePath);
};
