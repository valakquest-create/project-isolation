"use client";

import { Modal, useModalContext } from "@/features/admin-modal";
import { DeleteAddressCard } from "@/features/cities";
import { Button } from "@/shared/ui/button";

export function DeleteAddressLayout({
  id,
  cityId,
}: {
  id: number;
  cityId: number;
}) {
  const { data, setData } = useModalContext();

  return (
    <>
      <Button onClick={() => setData(true)} variant="destructive">
        Удалить адрес
      </Button>
      <Modal isActive={data}>
        <DeleteAddressCard id={id} cityId={cityId} setIsActive={setData} />
      </Modal>
    </>
  );
}
