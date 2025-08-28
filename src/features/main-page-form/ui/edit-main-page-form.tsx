"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Textarea } from "@/shared/ui/textarea";
import { cn } from "@/shared/ui/utils";
import { updateMainPageAction } from "../actions";

const formSchema = z.object({
  about: z.string().min(2),
});

export function EditMainPageForm({
  className,
  page,
  revalidatePagePath,
  changeState,
}: {
  className?: string;
  page: MainPage;
  revalidatePagePath: string[];
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isChangeTransition, startChangeTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: page?.about ?? "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit main page</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startChangeTransition(async () => {
                await updateMainPageAction(
                  { id: page?.id, data },
                  revalidatePagePath,
                );
                changeState((s) => !s);
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

            <Button type="submit" disabled={isChangeTransition}>
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
