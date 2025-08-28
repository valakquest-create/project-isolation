import { cookies } from "next/headers";
import { cityRepository } from "@/entities/city";
import { Location } from "./location";

// TODO:
// Сделать смену контента на основе выбора города

export async function LocationLayout() {
  const cities = await cityRepository.getAllCities();
  const cookieStore = cookies();
  const cityCookie = (await cookieStore).get("city")?.value;

  return <Location cities={cities} cityCookie={cityCookie} />;
}
