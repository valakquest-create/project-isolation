import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";
// eslint-disable-next-line boundaries/element-types
import { Address } from "@/entities/city";
import { jsonApiInstance } from "@/shared/api/api-instance";

// Paginated response
interface PaginatedResponse<T> {
  orders: T;
  nextCursor: string | null;
}

interface OrderDto {
  id: number;
  createdAt: string;
  updatedAt: string;
  dateTime: string;
  confirmed: boolean;
  closed: boolean;
  eventId: string;
  name: string;
  phone: string;
  personCount: number;
  questId: number;
  quest: {
    name: string;
    address: Address;
  };
}

export const ordersApi = {
  getOrdersQueryOptions: () => {
    return queryOptions({
      queryKey: ["orders"],
      queryFn: (meta) =>
        jsonApiInstance<OrderDto[]>("/orders", {
          signal: meta.signal,
        }),
    });
  },

  getOrdersInfiniteQueryOptions: ({
    orderBy,
    filter,
    limit,
  }: {
    orderBy?: string;
    filter?: string;
    limit?: number;
  }) => {
    return infiniteQueryOptions({
      queryKey: ["orders", orderBy, filter],
      queryFn: (meta) =>
        jsonApiInstance<PaginatedResponse<OrderDto[]>>(
          `/orders?cursor=${meta.pageParam}&orderBy=${orderBy}&filter=${filter}&limit=${limit}`,
          {
            signal: meta.signal,
          },
        ),
      initialPageParam: "",
      getNextPageParam: (result) => result.nextCursor,
      select: (result) => result.pages.flatMap((page) => page.orders),
    });
  },
};
