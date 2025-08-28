import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./schemas";

export const useQuestForm = (defaultValues: z.infer<typeof formSchema>) =>
  useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
