import { create } from "zustand";

export enum OrderBy {
  createdAtAsc = "createdAt-asc",
  createdAtDesc = "createdAt-desc",
  dateTimeAsc = "dateTime-asc",
  dateTimeDesc = "dateTime-desc",
}

export enum Filter {
  all = "all",
  pending = "pending",
  closed = "closed",
  confirmed = "confirmed",
}

interface OrderState {
  orderBy: OrderBy;
  filter: Filter;
  actions: {
    setOrderBy: (orderBy: OrderBy) => void;
    setFilter: (filter: Filter) => void;
  };
}

const useOrderStore = create<OrderState>()((set) => ({
  orderBy: OrderBy.createdAtDesc,
  filter: Filter.all,
  actions: {
    setOrderBy: (orderBy: OrderBy) => set({ orderBy }),
    setFilter: (filter: Filter) => set({ filter }),
  },
}));

export const useOrderBy = () => useOrderStore((state) => state.orderBy);
export const useFilter = () => useOrderStore((state) => state.filter);
export const useOrdersActions = () => useOrderStore((state) => state.actions);
