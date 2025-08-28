import { z } from "zod";

export const holidayFormSchema = z.object({
  name: z.string().min(2).max(255),
  date: z.date(),
});

export type HolidayFormType = z.infer<typeof holidayFormSchema>;
