"use client";

import { useTransition } from "react";
import { City } from "@/entities/city";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/ui/utils";
import { updateCityAction } from "../actions";
import { useEditCityForm } from "../model";

export function EditCityForm({
  city,
  className,
}: {
  city: City;
  className?: string;
}) {
  const [isUpdateTransition, startUpdateTransition] = useTransition();

  const form = useEditCityForm({
    name: city.name,
    map: city.map,
  });

  return (
    <Card className={cn("w-96", className)}>
      <CardHeader>
        <CardTitle>Обновить город</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startUpdateTransition(async () => {
                await updateCityAction(city.id, data);
              });
            })}
            className={cn(
              "space-y-8 w-full rounded p-4 border-slate-200 border-2",
            )}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Город</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Москва" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="map"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Карта</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="ссылка на карту" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isUpdateTransition}>
              Обновить
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
