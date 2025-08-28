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
import { createAddressAction } from "../actions";
import { useAddressForm } from "../model";

export function CreateAddressForm({
  cityId,
  className,
}: {
  cityId: number;
  className?: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useAddressForm({
    place: "",
  });

  return (
    <Card className={cn("w-96", className)}>
      <CardHeader>
        <CardTitle>Создать адрес</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                await createAddressAction({
                  cityId,
                  place: data.place,
                });
                form.reset();
              });
            })}
            className={cn(
              "space-y-8 w-full rounded p-4 border-slate-200 border-2",
            )}
          >
            <FormField
              control={form.control}
              name="place"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Адрес</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="ул. ..., д. ..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isCreateTransition}>
              Создать
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
