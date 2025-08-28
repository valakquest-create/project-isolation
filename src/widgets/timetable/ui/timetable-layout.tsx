"use client";

import React, { useEffect } from "react";
import { useTimeTableContext } from "@/features/timetable";
import { Holiday } from "@/entities/holiday";
import { QuestData } from "../types";
import { DayRowWithDatepicker } from "./dayrow-wth-date-picker";
import { DayRows } from "./dayrows";

export function TimeTableLayout({
  quest,
  reservations,
  holidays,
  showMoreButton,
  selectAnotherDateButton,
}: {
  quest: QuestData;
  reservations: string[];
  holidays: Holiday[];
  showMoreButton: React.ReactNode;
  selectAnotherDateButton: React.ReactNode;
}) {
  const [data, setData] = useTimeTableContext();

  useEffect(() => {
    const element = document.getElementById("reservation-form-id");

    if (!element) return;

    const block = window.innerWidth <= 722 ? "end" : "center";

    element.scrollIntoView({ behavior: "smooth", block: block });
  }, [data.rowNumber]);

  const anotherDate = !data.isShowAnotherDate ? (
    selectAnotherDateButton
  ) : (
    <DayRowWithDatepicker
      quest={quest}
      reservations={reservations}
      holidays={holidays}
    />
  );

  return (
    <div className="timetable">
      <DayRows
        quest={quest}
        reservations={reservations}
        holidays={holidays}
        contextData={data}
        setContextData={setData}
      />
      {!data.isExpanded ? showMoreButton : anotherDate}
    </div>
  );
}
