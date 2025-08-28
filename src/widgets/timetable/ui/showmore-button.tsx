"use client";

import { useTimeTableContext } from "@/features/timetable";

export function ShowMoreButton() {
  const [contextData, setContextData] = useTimeTableContext();

  return !contextData.isExpanded ? (
    <button
      className="timetable__button-more"
      onClick={() =>
        setContextData({
          ...contextData,
          daysToShow: contextData.daysToShow * 2,
          isExpanded: true,
        })
      }
    >
      {" "}
      Показать больше{" "}
    </button>
  ) : (
    <></>
  );
}
