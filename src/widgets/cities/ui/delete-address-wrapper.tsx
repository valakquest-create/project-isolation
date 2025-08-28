import { ModalContextProvider } from "@/features/admin-modal";
import { DeleteAddressLayout } from "./delete-address-layout";

export function DeleteAddressWrapper({
  id,
  cityId,
}: {
  id: number;
  cityId: number;
}) {
  return (
    <ModalContextProvider>
      <DeleteAddressLayout id={id} cityId={cityId} />
    </ModalContextProvider>
  );
}
