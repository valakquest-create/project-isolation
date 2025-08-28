import Link from "next/link";
import { cn } from "../utils";

import "./quest-button.scss";

export function QuestButton({
  children,
  className,
  variant,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant: "link" | "button";
}) {
  return variant === "button" ? (
    <button className={cn("button", className)} onClick={onClick}>
      {children}
    </button>
  ) : (
    <Link className={cn("button", className)} href={href ?? "/"}>
      {children}
    </Link>
  );
}
