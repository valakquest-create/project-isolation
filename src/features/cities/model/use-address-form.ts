import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addressSchema } from "./schemas";

export const useAddressForm = (defaultValues: z.infer<typeof addressSchema>) =>
  useForm({
    resolver: zodResolver(addressSchema),
    defaultValues,
  });
