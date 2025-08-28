"use client";

// eslint-disable-next-line import/no-internal-modules
import { useIntersection } from "@/shared/hooks/use-intersection";
import {
  handleConfirmAction,
  handleCloseAction,
  handleDeleteAction,
} from "../actions";
import { useFilter, useInfiniteOrders, useOrderBy } from "../model";
import { OrderItem } from "./order-item";

export function OrderList() {
  const orderBy = useOrderBy();
  const filter = useFilter();

  const { data, isLoading, refetch, fetchNextPage } = useInfiniteOrders({
    orderBy,
    filter,
    limit: 25,
  });

  const cursorRef = useIntersection(() => fetchNextPage());

  return (
    <>
      {isLoading && <p>Loading</p>}
      {data?.length ? (
        <>
          <ul className="flex flex-col gap-5">
            {data.map(({ quest, ...order }) => (
              <li key={order.id}>
                <OrderItem
                  quest={quest}
                  order={order}
                  onConfirm={handleConfirmAction.bind(null, order.id)}
                  onClose={handleCloseAction.bind(null, order.id)}
                  onDelete={handleDeleteAction.bind(null, order.id)}
                  refetch={refetch}
                />
              </li>
            ))}
          </ul>
          <div ref={cursorRef}></div>
        </>
      ) : (
        <p>There are no orders yet</p>
      )}
    </>
  );
}
