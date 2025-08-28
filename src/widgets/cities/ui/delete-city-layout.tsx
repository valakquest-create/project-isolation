"use client";

import { Modal, useModalContext } from "@/features/admin-modal";
import { DeleteCityCard } from "@/features/cities";
import { Button } from "@/shared/ui/button";

export function DeleteCityLayout({ id }: { id: number }) {
  const { data, setData } = useModalContext();

  return (
    <>
      <Button onClick={() => setData(true)} variant="destructive">
        Удалить город
      </Button>
      <Modal isActive={data}>
        <DeleteCityCard id={id} setIsActive={setData} />
      </Modal>
    </>
  );
}
