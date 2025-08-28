import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CreateCityCommand, UpdateCityCommand } from "@/entities/city";
import { citySchema } from "./schemas";

export const useCreateCityForm = (defaultValues: CreateCityCommand) =>
  useForm<z.infer<typeof citySchema>>({
    resolver: zodResolver(citySchema),
    defaultValues,
  });

export const useEditCityForm = (defaultValues: UpdateCityCommand) =>
  useForm<z.infer<typeof citySchema>>({
    resolver: zodResolver(citySchema),
    defaultValues,
  });
