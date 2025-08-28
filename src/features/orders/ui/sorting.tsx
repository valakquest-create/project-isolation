"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { OrderBy, useOrdersActions } from "../model";

export function Sorting() {
  const { setOrderBy } = useOrdersActions();

  return (
    <Select onValueChange={(value: OrderBy) => setOrderBy(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="дата создания ↑" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={OrderBy.createdAtAsc}>дата создания ↓</SelectItem>
        <SelectItem value={OrderBy.createdAtDesc}>дата создания ↑</SelectItem>
        <SelectItem value={OrderBy.dateTimeAsc}>дата проведения ↓</SelectItem>
        <SelectItem value={OrderBy.dateTimeDesc}>дата проведения ↑</SelectItem>
      </SelectContent>
    </Select>
  );
}
