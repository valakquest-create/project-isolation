/* eslint-disable boundaries/element-types */
"use client";

import _ from "lodash";
import { Fragment, memo } from "react";
import { ReservationForm } from "@/features/reservation";
import { ITimeTableContext, useTimeTableContext } from "@/features/timetable";
import { Holiday } from "@/entities/holiday";
import {
  checkIsAvailable,
  dateToString,
  getDayType,
} from "@/shared/lib/datetime";
import { cn } from "@/shared/ui/utils";
import { QuestData } from "../types";
import {
  addDaysToDate,
  getDate,
  minutesToString,
  replaceDate,
  toMinutesFromDayStart,
} from "../utils";

export const DayRow = memo(function DayRow({
  data,
  date,
  rowIndex,
  quest,
  reservations,
  holidays,
  setData,
}: {
  data: ITimeTableContext["data"];
  date: Date;
  rowIndex: number;
  quest: QuestData;
  reservations: string[];
  holidays: Holiday[];
  setData: React.Dispatch<React.SetStateAction<ITimeTableContext["data"]>>;
}) {
  const openHours = {
    weekdays: {
      from: "10:00",
      to: "23:30",
    },
    weekend: {
      from: "10:00",
      to: "01:00",
    },
  };

  const dayType = getDayType(date);

  const startMinutes = toMinutesFromDayStart(openHours[dayType].from);
  let endMinutes = toMinutesFromDayStart(openHours[dayType].to);

  //example 10:00 - 01:00
  endMinutes =
    endMinutes > startMinutes
      ? endMinutes
      : endMinutes + toMinutesFromDayStart("24:00");

  const QUEST_DURATION = 60;
  const QUEST_PREPARATION = 30;
  const timeStepMinutes = QUEST_DURATION + QUEST_PREPARATION;

  const timeItems = _.range(startMinutes, endMinutes + 1, timeStepMinutes) //inclusive range
    .map((minutes: number, idx: number) => {
      const timeString = minutesToString(minutes);
      const dateString = dateToString(
        minutes < toMinutesFromDayStart("24:00")
          ? date
          : addDaysToDate(date, 1),
      );

      //Костыльно
      if (getDate(date, minutes) < new Date()) {
        return <Fragment key={idx}></Fragment>;
      }

      return (
        <TimeItem
          key={idx}
          displayString={timeString}
          dateTimeString={`${dateString} ${timeString}`}
          rowIndex={rowIndex}
          reservations={reservations}
          isQuestActive={quest.isQuestActive}
        />
      );
    });

  const isOpen = data.rowNumber === rowIndex;

  return (
    <div className={`timetable__row ${isOpen ? "timetable__row_open" : ""}`}>
      <div className="timetable__day-wrapper">
        <DayInfo date={date} />
        <div className="timetable__wrapper-time">{timeItems}</div>
      </div>
      {isOpen ? (
        <ReservationForm
          quest={quest}
          holidays={holidays}
          timetableContextData={data}
          setTimetableContextData={setData}
        />
      ) : (
        <></>
      )}
    </div>
  );
});

const DayInfo = ({ date }: { date: Date }) => {
  const { day, ruMonth, ruDayWeek } = replaceDate(date.toDateString());
  return (
    <span className="timetable__date">{`${day} ${ruMonth}, ${ruDayWeek}`}</span>
  );
};

const TimeItem = ({
  displayString,
  dateTimeString,
  rowIndex,
  reservations,
  isQuestActive,
}: {
  displayString: string;
  dateTimeString: string;
  rowIndex: number;
  reservations: string[];
  isQuestActive: boolean;
}) => {
  const [data, setData] = useTimeTableContext();

  const isFreeToBook = !reservations.includes(dateTimeString);
  const isAvailable = checkIsAvailable(dateTimeString, new Date());
  const isActive = isFreeToBook && isAvailable && isQuestActive;

  const isSelected = data.dateTimeString === dateTimeString;

  return (
    <button
      className={cn(
        "timetable__button",
        !isActive
          ? "timetable__button_inactive"
          : isSelected && "timetable__button_selected",
      )}
      disabled={!isActive}
      onClick={() => setData({ ...data, dateTimeString, rowNumber: rowIndex })}
    >
      {displayString}
    </button>
  );
};
