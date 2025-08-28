import { cache } from "react";
import { dbClient } from "@/shared/lib/db";

class ContactsRepository {
  getContacts = cache(
    (): Promise<ContactItem[]> =>
      dbClient.contact.findMany() as Promise<ContactItem[]>,
  );

  createContact = (command: CreateContactItemCommand): Promise<ContactItem> =>
    dbClient.contact.create({
      data: command,
    }) as Promise<ContactItem>;

  deleteContact = (command: DeleteContactItemCommand): Promise<ContactItem> =>
    dbClient.contact.delete({
      where: { id: command.id },
    }) as Promise<ContactItem>;
}

export const contactsRepository = new ContactsRepository();
