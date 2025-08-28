import { Holiday } from "@/entities/holiday";
import { isHoliday, isLate, isWeekend } from "./utils";

export function countPrice(
  basePrice: number,
  persons: number,
  dateTimeString: string,
  holidays: Holiday[],
) {
  let price = basePrice;

  if (isWeekend(dateTimeString) || isHoliday(dateTimeString, holidays)) {
    price += 1000;
  }

  if (isLate(dateTimeString)) {
    price += 1000;
  }

  if (persons > 2) {
    price += 750 * (persons - 2);
  }

  return price;
}
