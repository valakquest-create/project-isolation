"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { FormControl } from "@/shared/ui/form";
import { Popover, PopoverTrigger, PopoverContent } from "@/shared/ui/popover";
import { cn } from "@/shared/ui/utils";

export function DatePicker({
  field,
}: {
  field: ControllerRenderProps<{ name: string; date: Date }, "date">;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !field.value && "text-muted-foreground",
            )}
          >
            {field.value ? (
              format(field.value, "dd-MM-yyyy")
            ) : (
              <span>Выберите дату</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={field.onChange}
          disabled={(date) => date < new Date()}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
}
