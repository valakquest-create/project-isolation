"use client";

import { useRouter } from "next/navigation";
import { navigations } from "@/shared/config/navigation";

import "./index.scss";

export function Menu({
  handleClick = () => {},
}: {
  isMobile?: boolean;
  handleClick?: () => void;
}) {
  const router = useRouter();

  return (
    <nav className="nav-menu">
      {Object.values(navigations).map(({ text, id, href }) => (
        <button
          className="nav-menu__link"
          onClick={() => {
            router.push(href);
            handleClick();
          }}
          key={id}
        >
          {text}
        </button>
      ))}
    </nav>
  );
}
