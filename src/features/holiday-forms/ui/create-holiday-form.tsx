"use client";

import { useTransition } from "react";
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
import { createHoliday, useHolidayForm } from "../model";
import { DatePicker } from "./date-picker";

export function CreateHolidayForm() {
  const form = useHolidayForm({
    name: "",
    date: new Date(),
  });

  const [isTransition, startTransition] = useTransition();

  return (
    <Card className="w-80 mb-5">
      <CardHeader>
        <CardTitle>Добавить праздник</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startTransition(async () => {
                await createHoliday(data);
                form.reset();
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
              Создать
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
