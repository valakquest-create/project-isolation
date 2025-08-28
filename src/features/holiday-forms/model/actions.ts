"use server";

import { revalidateTag } from "next/cache";
import {
  CreateHolidayCommand,
  DeleteHolidayCommand,
  holidayRepository,
  UpdateHolidayCommand,
} from "@/entities/holiday";

export const createHoliday = async (command: CreateHolidayCommand) => {
  await holidayRepository.createHoliday(command);
  revalidateTag("holidays");
};

export const updateHoliday = async (command: UpdateHolidayCommand) => {
  await holidayRepository.updateHoliday(command);
  revalidateTag("holidays");
};

export const deleteHoliday = async (command: DeleteHolidayCommand) => {
  await holidayRepository.deleteHoliday(command);
  revalidateTag("holidays");
};
