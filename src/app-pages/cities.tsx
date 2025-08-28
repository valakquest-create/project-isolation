import { CreateCityWrapper } from "@/widgets/cities";
import { CitiesList } from "@/widgets/cities";
import { AdminTitle } from "@/shared/ui/admin-title";

export function Cities() {
  return (
    <>
      <AdminTitle title="Города" />
      <CreateCityWrapper />
      <CitiesList />
    </>
  );
}
