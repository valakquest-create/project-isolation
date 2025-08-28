import { useInfiniteQuery } from "@tanstack/react-query";
import { ordersApi } from "@/entities/order";
import { Filter, OrderBy } from "./order-store";

export const useInfiniteOrders = ({
  orderBy,
  filter,
  limit,
}: {
  orderBy: OrderBy;
  filter: Filter;
  limit: number;
}) =>
  useInfiniteQuery(
    ordersApi.getOrdersInfiniteQueryOptions({ orderBy, filter, limit }),
  );
