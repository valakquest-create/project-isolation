"use client";

import { useTimeTableContext } from "@/features/timetable";

export function SelectAnotherDateButton() {
  const [data, setData] = useTimeTableContext();

  return (
    <button
      className="timetable__button-more"
      onClick={() => setData({ ...data, isShowAnotherDate: true })}
    >
      {" "}
      Выбрать другую дату{" "}
    </button>
  );
}
