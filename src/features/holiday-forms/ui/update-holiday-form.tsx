"use client";

import { useTransition } from "react";
import { Holiday } from "@/entities/holiday";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { updateHoliday, useHolidayForm } from "../model";
import { DatePicker } from "./date-picker";

export function UpdateHolidayForm({ holiday }: { holiday: Holiday }) {
  const form = useHolidayForm({
    name: holiday.name,
    date: holiday.date,
  });

  const [isTransition, startTransition] = useTransition();

  return (
    <Card className="w-80 mb-5">
      <CardHeader>
        <CardTitle>Обновить праздник</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startTransition(async () => {
                await updateHoliday({ id: holiday.id, ...data });
              });
            })}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название</FormLabel>
                  <FormControl>
                    <Input placeholder="Название праздника" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дата</FormLabel>
                  <DatePicker field={field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-5" type="submit" disabled={isTransition}>
              Обновить
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
