"use client";

import { Form } from "@/features/form";
import { Modal, useModalContext } from "@/features/modal";
import { QuestButton } from "@/shared/ui/quest-button";

export function ModalWithForm() {
  const { isActive, setActive } = useModalContext();

  return (
    <>
      <QuestButton
        variant="button"
        className="button_my100 button_mx-auto"
        onClick={() => setActive(true)}
      >
        Заказать сертификат
      </QuestButton>
      <Modal isActive={isActive} setActive={setActive}>
        <Form />
      </Modal>
    </>
  );
}
