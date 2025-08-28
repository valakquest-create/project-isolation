"use client";

import { Button } from "@/shared/ui/button";

export function ModalButton({
  children,
  handleClick,
}: {
  children: string;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Button className="mb-5 mx-auto" onClick={() => handleClick(true)}>
      {children}
    </Button>
  );
}
