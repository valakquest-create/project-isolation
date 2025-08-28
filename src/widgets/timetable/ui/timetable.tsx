import { TimeTableProvider } from "@/features/timetable";
import { holidayRepository } from "@/entities/holiday";
import { dateToString, toTimeString } from "@/shared/lib/datetime";
import { dbClient } from "@/shared/lib/db";
import { QuestData } from "../types";
import { SelectAnotherDateButton } from "./select-another-date-button";
import { ShowMoreButton } from "./showmore-button";
import { TimeTableLayout } from "./timetable-layout";

import "./timetable.scss";

export async function TimeTable({ quest }: { quest: QuestData }) {
  const confirmedOrders = await dbClient.order.findMany({
    where: {
      OR: [
        {
          confirmed: true,
        },
        {
          closed: true,
        },
      ],
      questId: quest.questId,
      dateTime: {
        gte: new Date(),
      },
    },
    select: {
      dateTime: true,
    },
  });

  const reservations = confirmedOrders.map(
    ({ dateTime }) => `${dateToString(dateTime)} ${toTimeString(dateTime)}`,
  );

  const holidays = await holidayRepository.getHolidaysAfterDate(new Date());

  return (
    <TimeTableProvider>
      <TimeTableLayout
        quest={quest}
        reservations={reservations}
        holidays={holidays}
        showMoreButton={<ShowMoreButton />}
        selectAnotherDateButton={<SelectAnotherDateButton />}
      />
    </TimeTableProvider>
  );
}
