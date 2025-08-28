"use server";

import { revalidateTag } from "next/cache";
import {
  cityRepository,
  CreateCityCommand,
  UpdateCityCommand,
  DeleteCityCommand,
  CreateAddressCommand,
  DeleteAddressCommand,
} from "@/entities/city";

export const createCityAction = async (command: CreateCityCommand) => {
  await cityRepository.createCity(command);

  revalidateTag("cities");
  revalidateTag("city-with-addresses");
};

export const updateCityAction = async (
  id: number,
  command: UpdateCityCommand,
) => {
  await cityRepository.updateCity(command, id);

  revalidateTag("cities");
  revalidateTag(`city-${id}`);
  revalidateTag("city-with-addresses");
};

export const deleteCityAction = async (command: DeleteCityCommand) => {
  await cityRepository.deleteCity(command);

  revalidateTag("cities");
  revalidateTag("city-with-addresses");
};

export const createAddressAction = async (command: CreateAddressCommand) => {
  await cityRepository.createAddress(command);

  revalidateTag(`addresses-city-${command.cityId}`);
  revalidateTag("city-with-addresses");
};

export const deleteAddressAction = async (
  command: DeleteAddressCommand,
  cityId: number,
) => {
  await cityRepository.deleteAddress(command);

  revalidateTag(`addresses-city-${cityId}`);
  revalidateTag("city-with-addresses");
};
