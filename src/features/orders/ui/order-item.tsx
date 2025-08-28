"use client";

import type {
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";
import { useTransition } from "react";
import { Address } from "@/entities/city";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";
import { cn } from "@/shared/ui/utils";

interface Order {
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
}

interface Quest {
  name: string;
  address: Address;
}

interface OrderFromApi extends Order {
  quest: Quest;
}

export function OrderItem({
  order,
  quest,
  onConfirm,
  onClose,
  onDelete,
  refetch,
}: {
  order: Order;
  quest: Quest;
  onConfirm: (confirmed: boolean) => Promise<void>;
  onClose: (closed: boolean) => Promise<void>;
  onDelete: () => Promise<void>;
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<OrderFromApi[], Error>>;
}) {
  const [isTransition, startTransition] = useTransition();

  const {
    id,
    createdAt,
    updatedAt,
    name,
    phone,
    personCount,
    dateTime,
    confirmed,
    closed,
  } = order;

  const handleConfirm = () => {
    startTransition(async () => {
      await onConfirm(!confirmed);
      refetch();
    });
  };

  const handleClose = () => {
    startTransition(async () => {
      await onClose(!closed);
      refetch();
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      await onDelete();
      refetch();
    });
  };

  return (
    <Card
      className={cn(
        confirmed && "border-2 border-lime-500",
        closed && "border-2 border-red-500",
      )}
    >
      <CardHeader>
        <CardTitle>{`Order #${id}`}</CardTitle>
        <CardDescription>
          <div>{`Created ${new Date(createdAt).toDateString()} at ${new Date(createdAt).toLocaleTimeString("ru")}`}</div>
          <div>{`Updated ${new Date(updatedAt).toDateString()} at ${new Date(updatedAt).toLocaleTimeString("ru")}`}</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Phone:</b> {phone}
        </p>
        <p>
          <b>Person count:</b> {personCount}
        </p>
        <p>
          <b>When:</b> {new Date(dateTime).toLocaleDateString("ru")}{" "}
          {new Date(dateTime).toLocaleTimeString("ru")}
        </p>
        <p>
          <b>Where:</b> {quest.address.place}
        </p>
        <p>
          <b>Quest:</b> {quest?.name}
        </p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-col gap-5 sm:flex-row">
          <Button onClick={handleConfirm} disabled={isTransition || closed}>
            {confirmed ? "Отменить подтверждение" : "Подтвердить"}
          </Button>
          <Button
            onClick={handleClose}
            variant={"secondary"}
            disabled={isTransition || confirmed}
          >
            {closed ? "Открыть для записи" : "Закрыть для записи"}
          </Button>
          <Button
            onClick={handleDelete}
            variant={"destructive"}
            disabled={isTransition || closed || confirmed}
          >
            Удалить
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
