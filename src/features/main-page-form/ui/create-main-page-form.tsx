"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/shared/ui/textarea";
import { cn } from "@/shared/ui/utils";
import { createMainPageAction } from "../actions";

const formSchema = z.object({
  about: z.string().min(2),
});

export function CreateMainPageForm({
  className,
  revalidatePagePath,
}: {
  className?: string;
  revalidatePagePath: string[];
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                createMainPageAction(data, revalidatePagePath);
              });
            })}
            className={cn(
              "space-y-8 w-full rounded p-4 border-slate-400 border-2",
              className,
            )}
          >
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="start type description"
                      rows={10}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isCreateTransition}>
              Create
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
