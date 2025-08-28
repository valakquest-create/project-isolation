import { cookies } from "next/headers";

export async function getCityCookie() {
  return (await cookies()).get("city")?.value || "Дубна";
}
