import { google } from "googleapis";
import { toUTCString } from "../lib/datetime";

const credentials = {
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
};

const scopes = "https://www.googleapis.com/auth/calendar";

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes,
});

const calendar = google.calendar({ version: "v3", auth });

function createEvent(order: Order, type: "confirm" | "close", quest?: Quest) {
  let summary: string;
  let colorId: string;

  switch (quest?.uniqueName) {
    case "graveyard":
      summary = "ИМ";
      colorId = "2";
      break;
    case "uncharted":
      summary = "ПРИЮТ";
      colorId = "7";
      break;
    case "devil":
      summary = "ВАЛАК";
      colorId = "3";
      break;
    case "montemor":
      summary = "МОНТ";
      colorId = "4";
      break;
    case "art":
      summary = "АРТ";
      colorId = "6";
      break;
    default:
      summary = "Подтвержденный квест";
      colorId = "5";
  }

  const startDateString = toUTCString(order.dateTime);

  const hourInMs = 60 * 60 * 1000;
  const endDate = new Date(order.dateTime.getTime() + hourInMs);

  const endDateString = toUTCString(endDate);

  if (type === "confirm") {
    let description = "";

    if (quest) {
      description = `
        Детали:
        - Название: ${quest.name}
        - Телефон: ${order.phone}
        - Кол-во человек: ${order.personCount}
      `;
    }

    return {
      id: order.eventId,
      summary,
      description,
      start: {
        dateTime: startDateString,
        timeZone: "Europe/Moscow",
      },
      end: {
        dateTime: endDateString,
        timeZone: "Europe/Moscow",
      },
      colorId,
    };
  }

  return {
    id: order.eventId,
    summary: "Закрытый квест",
    description: `Квест ${quest?.name} закрыт для записи`,
    start: {
      dateTime: startDateString,
      timeZone: "Europe/Moscow",
    },
    end: {
      dateTime: endDateString,
      timeZone: "Europe/Moscow",
    },
    colorId: "11",
  };
}

export async function insertEvent(
  order: Order,
  type: "confirm" | "close",
  quest?: Quest,
) {
  const event = createEvent(order, type, quest);
  const calendarId =
    type === "confirm"
      ? process.env.CONFIRM_CALENDAR_ID
      : process.env.CLOSE_CALENDAR_ID;

  try {
    await calendar.events.insert({
      calendarId,
      requestBody: event,
    });
  } catch (err) {
    console.error(
      "Error occured while creating calendar event",
      JSON.stringify(err),
    );
  }
}

export async function deleteEvent(eventId: string, type: "confirm" | "close") {
  const calendarId =
    type === "confirm"
      ? process.env.CONFIRM_CALENDAR_ID
      : process.env.CLOSE_CALENDAR_ID;

  try {
    await calendar.events.delete({
      calendarId,
      eventId,
    });
  } catch (err) {
    console.error(
      "Error occured while deleting calendar event",
      JSON.stringify(err),
    );
  }
}
