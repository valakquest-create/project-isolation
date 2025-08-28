"use client";

import { cn } from "@/shared/ui/utils";

export function Modal({
  children,
  isActive,
}: {
  children: Readonly<React.ReactNode>;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "hidden fixed top-0 left-0 bg-black/75 w-[100dvw] h-[100dvh]",
        isActive && "flex justify-center items-center",
      )}
    >
      {children}
    </div>
  );
}
