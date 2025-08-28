import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2),
  uniqueName: z.string().min(2),
  addressId: z.coerce.number(),
  basePrice: z.coerce.number().nonnegative().safe(),
  duration: z.coerce.number().nonnegative().safe(),
  fearLevel: z.coerce.number().nonnegative().max(5),
  personFrom: z.coerce.number().nonnegative().safe(),
  personTo: z.coerce.number().nonnegative().safe(),
  photos: z.string(),
  isActive: z.boolean(),

  title: z.string(),
  description: z.string(),
  h1: z.string().min(2),
  content: z.string().min(2),
});
