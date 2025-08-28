"use client";

import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { CityWithAddresses } from "@/entities/city";
import { contactsApi } from "@/entities/contacts/";
import { navigations } from "@/shared/config/navigation";

export function Contacts({ city }: { city: CityWithAddresses | null }) {
  const { data } = useQuery(contactsApi.getContactsQueryOptions());

  const pathname = usePathname();

  const isActive = pathname !== navigations.franchising.href;

  return (
    isActive && (
      <section className="contacts" id="contacts">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__wrapper-content">
          <div className="contacts__wrapper-left-column">
            <p className="contacts__info contacts__info_address">
              {city ? city.name : "Дубна"}
              {city &&
                city.addresses.length &&
                city.addresses.map((address) => (
                  <Fragment key={address.id}>
                    <br />
                    {address.place}
                  </Fragment>
                ))}
            </p>
            <p className="contacts__info contacts__info_mail">
              {data
                ?.filter((item) => item.type === "e-mail")
                .map((email) => (
                  <a href={`mailto:${email.value}`} key={email.id}>
                    {email.value}
                  </a>
                ))}
            </p>
            <p className="contacts__info contacts__info_phone">
              {data
                ?.filter((item) => item.type === "phone")
                .map((phone) => (
                  <a href={`tel:${phone.value}`} key={phone.id}>
                    {phone.value}
                  </a>
                ))}
            </p>
          </div>
          <div className="contacts__wrapper-right-column">
            {city && (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={city.map}
              ></iframe>
            )}
          </div>
        </div>
      </section>
    )
  );
}
