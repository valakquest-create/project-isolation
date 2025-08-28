import { cacheWithTags } from "@/shared/lib/cache-with-tags";
import { dbClient } from "@/shared/lib/db";
import {
  CreateHolidayCommand,
  DeleteHolidayCommand,
  Holiday,
  UpdateHolidayCommand,
} from "./types";

class HolidayRepository {
  createHoliday = (command: CreateHolidayCommand): Promise<Holiday> =>
    dbClient.holiday.create({
      data: command,
    });

  getHolidays = cacheWithTags(
    (): Promise<Holiday[]> => dbClient.holiday.findMany(),
    {
      key: "holidays",
      tags: ["holidays"],
    },
  );

  getHolidaysAfterDate = (gte: Date) =>
    cacheWithTags(
      (): Promise<Holiday[]> =>
        dbClient.holiday.findMany({
          where: {
            date: {
              gte,
            },
          },
        }),
      {
        key: "holidays",
        tags: ["holidays"],
      },
    )();

  getHolidayById = (id: number): Promise<Holiday | null> =>
    dbClient.holiday.findUnique({
      where: {
        id,
      },
    });

  updateHoliday = (command: UpdateHolidayCommand): Promise<Holiday> =>
    dbClient.holiday.update({
      where: {
        id: command.id,
      },
      data: command,
    });

  deleteHoliday = (command: DeleteHolidayCommand) =>
    dbClient.holiday.delete({
      where: {
        id: command.id,
      },
    });
}

export const holidayRepository = new HolidayRepository();
