"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/shared/ui/select";
import { Filter, useOrdersActions } from "../model";

export function Filtering() {
  const { setFilter } = useOrdersActions();

  return (
    <Select onValueChange={(value: Filter) => setFilter(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Все" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={Filter.all}>Все</SelectItem>
        <SelectItem value={Filter.closed}>Закрытые</SelectItem>
        <SelectItem value={Filter.confirmed}>Подтвержденные</SelectItem>
        <SelectItem value={Filter.pending}>Без статуса</SelectItem>
      </SelectContent>
    </Select>
  );
}
