"use client";

import { useTransition } from "react";
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
import { createFranchisingAction } from "../actions";
import { useFranchisingForm } from "../use-franchising-form";

export function CreateFranchisingForm({
  className,
  revalidatePagePath,
}: {
  className?: string;
  revalidatePagePath: string[];
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useFranchisingForm({
    title: "",
    description: "",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Создать страницу франшизы</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                createFranchisingAction(data, revalidatePagePath);
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

            <Button type="submit" disabled={isCreateTransition}>
              Создать
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
