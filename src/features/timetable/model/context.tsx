"use client";

import { createContext, useContext, useState } from "react";

interface ITimeTableContextData {
  dateTimeString: string;
  rowNumber: number;
  daysToShow: number;
  isExpanded: boolean;
  isShowAnotherDate: boolean;
  timezone: string;
  dateLength: number;
  anotherDate: string;
}

export interface ITimeTableContext {
  data: ITimeTableContextData;
  setData: React.Dispatch<
    React.SetStateAction<ITimeTableContextData>
  >;
}

const initialData: ITimeTableContextData = {
  dateTimeString: "",
  rowNumber: -1,
  daysToShow: 14,
  isExpanded: false,
  isShowAnotherDate: false,
  timezone: "+03.00",
  dateLength: 0,
  anotherDate: ""
}

const TimeTableContext = createContext<ITimeTableContext>({
  data: initialData,
  setData: () => {},
});

export function TimeTableProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ITimeTableContext["data"]>(initialData);
  return (
    <TimeTableContext.Provider value={{ data, setData }}>
      {children}
    </TimeTableContext.Provider>
  );
}

export function useTimeTableContext() {
  const { data, setData } = useContext(TimeTableContext);

  return [data, setData] as [typeof data, typeof setData];
}
