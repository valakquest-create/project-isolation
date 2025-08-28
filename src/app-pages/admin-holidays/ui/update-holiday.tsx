import { notFound } from "next/navigation";
import { UpdateHolidayForm } from "@/features/holiday-forms";
import { holidayRepository } from "@/entities/holiday";
import { AdminTitle } from "@/shared/ui/admin-title";

export async function UpdateHoliday({ id }: { id: number }) {
  const holiday = await holidayRepository.getHolidayById(id);

  if (!holiday) {
    notFound();
  }

  return (
    <>
      <AdminTitle title="Обновить праздник" />
      <UpdateHolidayForm holiday={holiday} />
    </>
  );
}
