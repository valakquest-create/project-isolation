import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateHolidayCommand } from "@/entities/holiday";
import { holidayFormSchema, HolidayFormType } from "./schema";

export const useHolidayForm = (defaultValues: CreateHolidayCommand) =>
  useForm<HolidayFormType>({
    resolver: zodResolver(holidayFormSchema),
    defaultValues,
  });
