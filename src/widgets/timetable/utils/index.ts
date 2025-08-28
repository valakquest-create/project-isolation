export function calcDateOfTimezone(date: Date, offset: number) {
  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  return new Date(utc + 3600000 * offset);
}

export function toMinutesFromDayStart(time: string) {
  const [hours, minutes] = parseTimeString(time);

  return hours * 60 + minutes;
}

export function parseTimeString(time: string) {
  return time.split(":").map((x) => parseInt(x));
}

export function minutesToString(minutes: number) {
  return `${("0" + Math.floor((minutes / 60) % 24)).slice(-2)}:${(
    "0" +
    (minutes % 60)
  ).slice(-2)}`;
}

export function addDaysToDate(date: Date, days: number) {
  const newDate = new Date(Number(date));
  newDate.setDate(date.getDate() + days);
  return newDate;
}

export function getDate(date: Date, minutesFromStart: number) {
  const newDate = new Date(
    addDaysToDate(date, Math.floor(minutesFromStart / (24 * 60))),
  );

  const hours = Math.floor((minutesFromStart / 60) % 24);
  const minutes = Math.floor(minutesFromStart % 60);

  newDate.setHours(hours);
  newDate.setMinutes(minutes);
  newDate.setSeconds(0);

  return newDate;
}

export const replaceDate = (date: string) => {
  const dayWeek = date.slice(0, 3);
  const month = date.slice(4, 7);
  const day = date.slice(8, 10);
  let ruDayWeek, ruMonth;

  switch (dayWeek) {
    case "Mon":
      ruDayWeek = "Понедельник";
      break;
    case "Tue":
      ruDayWeek = "Вторник";
      break;
    case "Wed":
      ruDayWeek = "Среда";
      break;
    case "Thu":
      ruDayWeek = "Четверг";
      break;
    case "Fri":
      ruDayWeek = "Пятница";
      break;
    case "Sat":
      ruDayWeek = "Суббота";
      break;
    case "Sun":
      ruDayWeek = "Воскресенье";
      break;
    default:
      ruDayWeek = "";
  }

  switch (month) {
    case "Jan":
      ruMonth = "Января";
      break;
    case "Feb":
      ruMonth = "Февраля";
      break;
    case "Mar":
      ruMonth = "Март";
      break;
    case "Apr":
      ruMonth = "Апреля";
      break;
    case "May":
      ruMonth = "Май";
      break;
    case "Jun":
      ruMonth = "Июня";
      break;
    case "Jul":
      ruMonth = "Июля";
      break;
    case "Aug":
      ruMonth = "Август";
      break;
    case "Sep":
      ruMonth = "Сентября";
      break;
    case "Oct":
      ruMonth = "Октября";
      break;
    case "Nov":
      ruMonth = "Ноября";
      break;
    case "Dec":
      ruMonth = "Декабря";
      break;
    default:
      ruMonth = "";
  }

  return {
    day,
    ruDayWeek,
    ruMonth,
  };
};
