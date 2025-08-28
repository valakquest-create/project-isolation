import { ModalContextProvider } from "@/features/modal";
import { ModalWithForm } from "./ui";

export function ModalWithFormWrapper() {
  return (
    <ModalContextProvider>
      <ModalWithForm />
    </ModalContextProvider>
  );
}
