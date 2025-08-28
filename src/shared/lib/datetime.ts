export function getDayType(date: Date) {
  const dayOfWeek = date.getDay();

  return dayOfWeek < 5 ? "weekdays" : "weekend";
}

export function toTimeString(date: Date) {
  function format(input: number) {
    return String(input).length > 1 ? input : `0${input}`;
  }

  return `${format(date.getHours())}:${format(date.getMinutes())}`;
}

export function dateToString(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function toUTCString(date: Date) {
  return `${dateToString(date)}T${toTimeString(date)}:00`;
}

export function checkIsAvailable(eventDateTime: string, now: Date) {
  const eventDate = new Date(formatDateString(eventDateTime));
  const hours = now.getHours();

  // Define 10AM and 10PM of today
  const tenAMToday = new Date(now);
  tenAMToday.setHours(10, 0, 0, 0);

  const tenPMToday = new Date(now);
  tenPMToday.setHours(22, 0, 0, 0);

  const tenAMTomorrow = new Date(now);
  tenAMTomorrow.setDate(tenAMTomorrow.getDate() + 1);
  tenAMTomorrow.setHours(10, 0, 0, 0);

  const tenPMYesterday = new Date(now);
  tenPMYesterday.setDate(tenPMYesterday.getDate() - 1);
  tenPMYesterday.setHours(22, 0, 0, 0);

  if (hours >= 10 && hours < 22) {
    // If now is between 10 AM and 10 PM, allow ordering any event
    return true;
  } else {
    // If now is after 10 PM, disallow ordering events between 10 PM today and 10 AM tomorrow
    if (hours >= 22) {
      return !(eventDate >= tenPMToday && eventDate <= tenAMTomorrow);
    }
    // If now is before 10 AM, disallow events before 10 AM today (i.e., after 10 PM yesterday)
    if (hours < 10) {
      return !(eventDate >= tenPMYesterday && eventDate <= tenAMToday);
    }
  }

  return true;
}

export const formatDateString = (dateStr: string) => {
  return dateStr.replace(
    /(\d{4})-(\d{1,2})-(\d{1,2}) (\d{2}:\d{2})/,
    (_, y, m, d, time) => {
      return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}T${time}:00`;
    },
  );
};
