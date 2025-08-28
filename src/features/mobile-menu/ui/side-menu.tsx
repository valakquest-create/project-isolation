"use client";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { contactsApi } from "@/entities/contacts";
import { Menu } from "@/shared/ui/menu";
import { useMenu } from "../use-menu";

import "./side-menu.scss";

export function SideMenu() {
  const [isActive, setActive] = useMenu();
  const { data } = useQuery(contactsApi.getContactsQueryOptions());
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener("scroll", () => setActive(false));

    return document.removeEventListener("scroll", () => setActive(false));
  }, [setActive]);

  useEffect(() => {
    setActive(false);
  }, [pathname, setActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="side-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <Menu handleClick={() => setActive(false)} />
          {data && (
            <ul className="open-menu__list-phones">
              {data
                .filter((item) => item.type === "phone")
                .map((phone) => (
                  <li key={phone.id} className="open-menu__item-phone">
                    <a href={`tel:${phone.value}`}>{phone.value}</a>
                  </li>
                ))}
            </ul>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
