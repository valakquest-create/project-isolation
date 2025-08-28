import { ContactList, CreateContactForm } from "@/features/contacts";
import { AdminTitle } from "@/shared/ui/admin-title";

export default function ContactsPage() {
  return (
    <>
      <AdminTitle title="Admin contacts" />
      <CreateContactForm
        className="mb-5"
        revalidatePagePath="/admin/contacts"
      />
      <ContactList revalidatePagePath="/admin/contacts" />
    </>
  );
}
