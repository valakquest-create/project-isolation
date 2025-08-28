import { HolidaysList } from "@/widgets/holiday-list";
import { CreateHolidayForm } from "@/features/holiday-forms";
import { holidayRepository } from "@/entities/holiday";
import { AdminTitle } from "@/shared/ui/admin-title";

export async function HolidaysPage() {
  const holidays = await holidayRepository.getHolidays();

  return (
    <>
      <AdminTitle title="Праздничные дни" />
      <CreateHolidayForm />
      <HolidaysList holidays={holidays} />
    </>
  );
}
