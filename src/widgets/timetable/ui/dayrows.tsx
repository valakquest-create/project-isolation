"use client";

import { memo, useEffect } from "react";
import { ITimeTableContext } from "@/features/timetable";
import { Holiday } from "@/entities/holiday";
import { QuestData } from "../types";
import { addDaysToDate, calcDateOfTimezone } from "../utils";
import { DayRow } from "./dayrow";

export const DayRows = memo(function DayRows({
  quest,
  reservations,
  holidays,
  contextData,
  setContextData,
}: {
  quest: QuestData;
  reservations: string[];
  holidays: Holiday[];
  contextData: ITimeTableContext["data"];
  setContextData: ITimeTableContext["setData"];
}) {
  const { daysToShow, timezone } = contextData;

  const today = new Date();

  const dates = [];
  for (let i = 0; i < daysToShow; i++) {
    const date = calcDateOfTimezone(
      addDaysToDate(today, i),
      parseInt(timezone),
    );
    date.setHours(0, 0, 0, 0);
    dates.push(date);
  }

  useEffect(() => {
    setContextData({ ...contextData, dateLength: dates.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextData.isExpanded]);

  return (
    <>
      {dates.map((date: Date, idx: number) => {
        return (
          <DayRow
            key={idx}
            data={contextData}
            rowIndex={idx}
            date={date}
            quest={quest}
            reservations={reservations}
            holidays={holidays}
            setData={setContextData}
          />
        );
      })}
    </>
  );
});
