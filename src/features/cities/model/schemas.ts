import { z } from "zod";

export const citySchema = z.object({
  name: z.string().min(2).max(255),
  map: z.string().max(255),
});

export const addressSchema = z.object({
  place: z.string().min(2).max(255),
});
