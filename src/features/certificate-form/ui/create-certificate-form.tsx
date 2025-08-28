"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

const schema = z.object({
  h1: z.string().min(2),
  content: z.string().min(2),
  images: z
    .array(
      z.instanceof(File).refine((file) => file.size <= 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      }),
    )
    .min(1),
});

export function CreateCertificateForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      h1: "",
      content: "",
      images: [],
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="h1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>H1</FormLabel>
              <FormControl>
                <Input placeholder="h1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="content" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...restFields } }) => (
            <FormItem>
              <FormLabel>Photos</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple={true}
                  {...restFields}
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    form.setValue("images", files, {
                      shouldValidate: true,
                    });
                    onChange(files);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
