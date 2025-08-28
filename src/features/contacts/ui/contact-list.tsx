import { revalidatePath } from "next/cache";
import { contactsRepository } from "../api";
import { ContactItem } from "./contact-item";

export async function ContactList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const contacts = await contactsRepository.getContacts();

  const handleDeleteAction = async (id: number) => {
    "use server";

    await contactsRepository.deleteContact({ id });
    revalidatePath(revalidatePagePath);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Contact List</h2>
      {contacts.length ? (
        <ul className="flex flex-col gap-5">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <ContactItem
                contact={contact}
                onDelete={handleDeleteAction.bind(null, contact.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm font-light">Contact list is empty</p>
      )}
    </div>
  );
}
