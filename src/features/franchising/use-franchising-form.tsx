"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Franchising } from "@/entities/franchising";

export const formSchema = z.object({
  title: z.string().min(2).max(255),
  description: z.string().min(2),
});

export function useFranchisingForm(defaultValues: Omit<Franchising, "id">) {
  return useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
}
