"use client";

import { useTimeTableContext } from "@/features/timetable";
import { Holiday } from "@/entities/holiday";
import { QuestData } from "../types";
import { addDaysToDate, calcDateOfTimezone } from "../utils";
import { DayRow } from "./dayrow";

export const DayRowWithDatepicker = ({
  quest,
  reservations,
  holidays,
}: {
  quest: QuestData;
  reservations: string[];
  holidays: Holiday[];
}) => {
  const [contextData, setContextData] = useTimeTableContext();

  const { dateLength, timezone, anotherDate } = contextData;

  const minimumDateString = calcDateOfTimezone(
    addDaysToDate(new Date(), dateLength),
    parseInt(timezone),
  )
    .toISOString()
    .split("T")[0];

  const dateString = anotherDate || minimumDateString;

  return (
    <div className="timetable__wrapper-date-selector">
      <label className="timetable__wrapper-date-selector-label" htmlFor="date">
        Выберите дату:
      </label>
      <input
        className="timetable__date-selector"
        id="date"
        type="date"
        min={minimumDateString}
        value={dateString}
        onChange={(e) => {
          setContextData({
            ...contextData,
            anotherDate: e.target.value,
            rowNumber: -1,
            dateTimeString: "",
          });
        }}
      />
      <DayRow
        data={contextData}
        rowIndex={contextData.dateLength}
        date={new Date(dateString)}
        reservations={reservations}
        quest={quest}
        holidays={holidays}
        setData={setContextData}
      />
    </div>
  );
};
