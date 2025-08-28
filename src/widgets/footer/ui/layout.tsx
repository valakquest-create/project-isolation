import { cityRepository } from "@/entities/city";
import { getCityCookie } from "@/shared/lib/get-city-cookie";
import { Contacts } from "./contacts";
import { Socials } from "./socials";

import "./layout.scss";

export async function Footer() {
  const city = await getCityCookie();
  const cityWithAddresses = await cityRepository.getCityByName(city)();

  return (
    <footer>
      <Contacts city={cityWithAddresses} />
      <Socials />
    </footer>
  );
}
