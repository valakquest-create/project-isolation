import { ModalContextProvider } from "@/features/admin-modal";
import { CreateCityLayout } from "./create-city-layout";

export function CreateCityWrapper() {
  return (
    <ModalContextProvider>
      <CreateCityLayout />
    </ModalContextProvider>
  );
}
