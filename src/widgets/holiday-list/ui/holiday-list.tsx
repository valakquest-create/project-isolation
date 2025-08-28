import { DeleteDialog } from "@/features/holiday-forms";
import { Holiday, HolidayItem } from "@/entities/holiday";
import { Button } from "@/shared/ui/button";

export function HolidaysList({ holidays }: { holidays: Holiday[] }) {
  return holidays.length ? (
    <div className="flex flex-col gap-4">
      {holidays.map((holiday) => (
        <HolidayItem key={holiday.id} holiday={holiday}>
          <div className="flex gap-5">
            <a href={`/admin/holidays/${holiday.id}`}>
              <Button>Обновить</Button>
            </a>
            <DeleteDialog id={holiday.id} />
          </div>
        </HolidayItem>
      ))}
    </div>
  ) : (
    <div>Праздников не найдено</div>
  );
}
