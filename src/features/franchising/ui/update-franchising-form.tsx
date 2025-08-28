"use client";

import { useTransition } from "react";
import { Franchising } from "@/entities/franchising";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { cn } from "@/shared/ui/utils";
import { updateFranchisingAction } from "../actions";
import { useFranchisingForm } from "../use-franchising-form";

export function UpdateFranchisingForm({
  franchising,
  className,
  revalidatePagePath,
  changeState,
}: {
  franchising: Franchising;
  className?: string;
  revalidatePagePath: string[];
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useFranchisingForm({
    title: franchising.title ?? "",
    description: franchising.description ?? "",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Редактировать страницу франшизы</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                await updateFranchisingAction(
                  { id: franchising.id, data },
                  revalidatePagePath,
                );
                changeState(false);
              });
            })}
            className={cn(
              "space-y-8 w-full rounded p-4 border-slate-400 border-2",
              className,
            )}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-5">
              <Button type="submit" disabled={isCreateTransition}>
                Изменить
              </Button>
              <Button
                variant="destructive"
                onClick={() => changeState(false)}
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
