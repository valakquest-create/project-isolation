import { cacheWithTags } from "@/shared/lib/cache-with-tags";
import { dbClient } from "@/shared/lib/db";
import {
  Address,
  City,
  CityWithAddresses,
  CreateAddressCommand,
  CreateCityCommand,
  DeleteAddressCommand,
  DeleteCityCommand,
  UpdateCityCommand,
} from "./types";

class CityRepository {
  createCity = (command: CreateCityCommand): Promise<City> =>
    dbClient.city.create({
      data: command,
    });

  getAllCities = cacheWithTags(
    (): Promise<City[]> => dbClient.city.findMany(),
    {
      key: "cities",
      tags: ["cities"],
    },
  );

  getFirstCityWithAddresses = cacheWithTags(
    (): Promise<CityWithAddresses | null> =>
      dbClient.city.findFirst({
        include: {
          addresses: true,
        },
      }),
    {
      key: "city-with-addresses",
      tags: ["city-with-addresses"],
    },
  );

  getCitiesWithAddresses = cacheWithTags(
    (): Promise<CityWithAddresses[]> =>
      dbClient.city.findMany({
        include: {
          addresses: true,
        },
      }),
    {
      key: "city-with-addresses",
      tags: ["city-with-addresses"],
    },
  );

  getCityById = (id: number) =>
    cacheWithTags(
      (): Promise<City | null> =>
        dbClient.city.findUnique({
          where: {
            id,
          },
        }),
      {
        key: `city-${id}`,
        tags: [`city-${id}`],
      },
    )();

  updateCity = (command: UpdateCityCommand, id: number): Promise<City | null> =>
    dbClient.city.update({
      data: command,
      where: {
        id,
      },
    });

  deleteCity = (command: DeleteCityCommand): Promise<City> =>
    dbClient.city.delete({
      where: {
        id: command.id,
      },
    });

  createAddress = (command: CreateAddressCommand): Promise<Address> =>
    dbClient.address.create({ data: command });

  getAddressesByCityId = (cityId: number) =>
    cacheWithTags(
      (): Promise<Address[]> =>
        dbClient.address.findMany({
          where: {
            cityId,
          },
        }),
      {
        key: `addresses-city-${cityId}`,
        tags: [`addresses-city-${cityId}`],
      },
    )();

  deleteAddress = (command: DeleteAddressCommand): Promise<Address> =>
    dbClient.address.delete({ where: { id: command.id } });

  getCityByNameWithQuests = (cityName: string) =>
    cacheWithTags(
      () =>
        dbClient.city.findFirst({
          where: {
            name: cityName,
          },
          include: {
            addresses: {
              include: {
                quests: true,
              },
            },
          },
        }),
      {
        key: `city-with-quests-${cityName}`,
        tags: [`city-with-quests-${cityName}`],
      },
    );

  getCityByName = (cityName: string) =>
    cacheWithTags(
      (): Promise<CityWithAddresses | null> =>
        dbClient.city.findFirst({
          where: {
            name: cityName,
          },
          include: {
            addresses: true,
          },
        }),
      {
        key: `city-by-${cityName}`,
        tags: [`city-by-${cityName}`],
      },
    );

  getAllCitiesWithQuests = cacheWithTags(
    () =>
      dbClient.city.findMany({
        include: {
          addresses: {
            include: {
              quests: true,
            },
          },
        },
      }),
    {
      key: "cities-with-quests",
      tags: ["cities-with-quests"],
    },
  );
}

export const cityRepository = new CityRepository();
