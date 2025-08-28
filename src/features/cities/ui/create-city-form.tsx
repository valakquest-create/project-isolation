"use client";

import { useTransition } from "react";
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
import { createCityAction } from "../actions";
import { useCreateCityForm } from "../model";

export function CreateCityForm({
  handleClick,
}: {
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useCreateCityForm({
    name: "",
    map: "",
  });

  const reset = () => {
    form.reset();
    handleClick(false);
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Создать город</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                await createCityAction(data);
                reset();
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

            <div className="flex gap-5">
              <Button type="submit" disabled={isCreateTransition}>
                Создать
              </Button>

              <Button
                type="button"
                variant="destructive"
                onClick={() => reset()}
                disabled={isCreateTransition}
              >
                Отменить
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
