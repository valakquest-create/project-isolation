import { notFound } from "next/navigation";
import { AddressesList } from "@/widgets/cities";
import { CreateAddressForm, EditCityForm } from "@/features/cities";
import { cityRepository } from "@/entities/city";
import { AdminTitle } from "@/shared/ui/admin-title";

export async function City({ id }: { id: number }) {
  const city = await cityRepository.getCityById(id);

  if (!city) {
    notFound();
  }

  return (
    <>
      <AdminTitle title={city.name} />
      <div className="grid grid-cols-2 gap-5">
        <EditCityForm className="w-full" city={city} />

        <div className="flex flex-col items-center gap-5">
          <CreateAddressForm className="w-full" cityId={city.id} />
          <AddressesList className="w-full" cityId={city.id} />
        </div>
      </div>
    </>
  );
}
