/* eslint-disable @typescript-eslint/no-unused-vars */
interface ContactItem {
  id: number;
  type: ContactType;
  value: string;
}

interface CreateContactItemCommand {
  type: ContactType;
  value: string;
}

interface DeleteContactItemCommand {
  id: number;
}
