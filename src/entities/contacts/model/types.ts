/* eslint-disable @typescript-eslint/no-unused-vars */
export enum ContactType {
  City = "city",
  Street = "street",
  Phone = "phone",
  Email = "e-mail",
  Vk = "vk",
  Whatsapp = "whatsapp",
  Telegram = "telegram",
}

export interface Contact {
  id: number;
  type: ContactType;
  value: string;
}
