"use client";

import { Modal, ModalButton, useModalContext } from "@/features/admin-modal";
import { CreateCityForm } from "@/features/cities";

export function CreateCityLayout() {
  const { data, setData } = useModalContext();

  return (
    <>
      <ModalButton handleClick={setData}>Создать город</ModalButton>
      <Modal isActive={data}>
        <CreateCityForm handleClick={setData} />
      </Modal>
    </>
  );
}
