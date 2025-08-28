import { AddressItem, cityRepository } from "@/entities/city";
import { cn } from "@/shared/ui/utils";
import { DeleteAddressWrapper } from "./delete-address-wrapper";

export async function AddressesList({
  cityId,
  className,
}: {
  cityId: number;
  className?: string;
}) {
  const addresses = await cityRepository.getAddressesByCityId(cityId);

  return (
    <div className={cn(className)}>
      {addresses.length ? (
        <div className="flex flex-col gap-5">
          {addresses.map((address) => (
            <AddressItem key={address.id} place={address.place}>
              <DeleteAddressWrapper id={address.id} cityId={cityId} />
            </AddressItem>
          ))}
        </div>
      ) : (
        "Адресов не найдено"
      )}
    </div>
  );
}
