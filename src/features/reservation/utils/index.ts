import { format } from "date-fns";
import { Holiday } from "@/entities/holiday";
import { formatDateString } from "@/shared/lib/datetime";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function isLate(dateTimeString: string) {
  const timeString = dateTimeString.split(" ")[1];
  const [hours, minutes] = timeStringToHoursMinutesNumbers(timeString);
  const currentFromMidnight = fromMidnight(hours, minutes);

  const lateStart = 22 * 60;
  const lateEnd = 60;

  return currentFromMidnight >= lateStart || currentFromMidnight <= lateEnd;
}

export function isLateWeekend(dateTimeString: string) {
  return (
    (isWeekend(dateTimeString) ||
      new Date(formatDateString(dateTimeString)).getDay() === 5) &&
    isLate(dateTimeString)
  );
}

export function isWeekend(dateTimeString: string) {
  const date = new Date(formatDateString(dateTimeString));

  return date.getDay() === 0 || date.getDay() > 5;
}

export const isHoliday = (dateTimeString: string, holidays: Holiday[]) =>
  holidays
    .map((holiday) => format(holiday.date, "yyyy-M-d"))
    .includes(dateTimeString.split(" ")[0]);

export const isLateHoliday = (dateTimeString: string, holidays: Holiday[]) =>
  isLate(dateTimeString) && isHoliday(dateTimeString, holidays);

export function countTotalPrice(
  personCount: number,
  dateTimeString: string,
  priceHours: any,
  dayOfWeek: DayOfWeek,
) {
  const timeString = dateTimeString.split(" ")[1];

  const dayPriceHours = priceHours[dayOfWeek] as Array<{
    from: string;
    to: string;
    price: number;
  }>;

  const basePrice = dayPriceHours.filter(({ from, to }) => {
    const [startHours, startMinutes] = timeStringToHoursMinutesNumbers(from);
    const [endHours, endMinutes] = timeStringToHoursMinutesNumbers(to);
    const [currentHours, currentMinutes] =
      timeStringToHoursMinutesNumbers(timeString);

    const startFromMidnight = fromMidnight(startHours, startMinutes);

    const currentFromMidnight =
      startFromMidnight > fromMidnight(currentHours, currentMinutes)
        ? fromMidnight(currentHours, currentMinutes) + 24 * 60
        : fromMidnight(currentHours, currentMinutes);

    const endFromMidnight =
      startFromMidnight > fromMidnight(endHours, endMinutes)
        ? fromMidnight(endHours, endMinutes) + 24 * 60
        : fromMidnight(endHours, endMinutes);

    return (
      currentFromMidnight >= startFromMidnight &&
      currentFromMidnight <= endFromMidnight
    );
  })[0].price;

  if (personCount > 3) {
    return basePrice + (personCount - 3) * 1000;
  } else {
    return basePrice;
  }
}

export function timeStringToHoursMinutesNumbers(timeString: string) {
  return timeString.split(":").map((x) => parseInt(x));
}

export function fromMidnight(hours: number, minutes: number) {
  return hours * 60 + minutes;
}
