import { ModalContextProvider } from "@/features/admin-modal";
import { DeleteCityLayout } from "./delete-city-layout";

export function DeleteCityWrapper({ id }: { id: number }) {
  return (
    <ModalContextProvider>
      <DeleteCityLayout id={id} />
    </ModalContextProvider>
  );
}
