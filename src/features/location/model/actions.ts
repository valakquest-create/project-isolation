"use server";

import { cookies } from "next/headers";
import { revalidateTags } from "@/shared/lib/cache-with-tags";

export const setCityCookie = async (city: string) => {
  (await cookies()).set("city", city, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  revalidateTags(`city-with-quests-${city}`, `city-by-${city}`);
};
