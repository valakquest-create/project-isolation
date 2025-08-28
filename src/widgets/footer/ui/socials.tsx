"use client";

import { useQuery } from "@tanstack/react-query";
import { contactsApi, ContactType } from "@/entities/contacts/";

export function Socials() {
  const { data } = useQuery(contactsApi.getContactsQueryOptions());

  return (
    <section className="social">
      {data
        ?.filter(
          (item) =>
            item.type === ContactType.Telegram ||
            item.type === ContactType.Vk ||
            item.type === ContactType.Whatsapp,
        )
        .map((item) => (
          <a
            key={item.id}
            className="social__link"
            target="_blank"
            href={item.value}
          >
            {item.type}
          </a>
        ))}
    </section>
  );
}
