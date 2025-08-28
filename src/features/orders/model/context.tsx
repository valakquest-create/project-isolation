"use client";

import { createContext, useContext, useState } from "react";

export enum OrderBy {
  creationAsc = "creation-asc",
  creationDesc = "creation-desc",
  eventAsc = "event-asc",
  eventDesc = "event-desc",
}

interface ISortingContext {
  orderBy: OrderBy;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderBy>>;
}

const initialState: ISortingContext = {
  orderBy: OrderBy.creationDesc,
  setOrderBy: () => {},
};

const SortingContext = createContext<ISortingContext>(initialState);

export const useSortingContext = () => {
  const { orderBy, setOrderBy } = useContext(SortingContext);

  return { orderBy, setOrderBy };
};

export function SortingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orderBy, setOrderBy] = useState<OrderBy>(initialState.orderBy);

  return (
    <SortingContext.Provider value={{ orderBy, setOrderBy }}>
      {children}
    </SortingContext.Provider>
  );
}
