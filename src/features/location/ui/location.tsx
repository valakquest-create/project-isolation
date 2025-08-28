"use client";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { City } from "@/entities/city";
import { locationApi } from "../api";
import { CityConfirmation } from "./city-confirmation";
import { CitySelector } from "./city-selector";

import "./location.scss";

const defaultCity = "Дубна";

export function Location({
  cities,
  cityCookie,
}: {
  cities: City[];
  cityCookie: string | undefined;
}) {
  const { data: userCity } = useQuery(locationApi.getCityQueryOption());

  const [isCitySelectorShown, setCitySelectorShown] = useState(false);
  const [isCityConfirmationShown, setCityConfirmationShown] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    if (!cityCookie) {
      if (userCity) {
        let currentCity = userCity.city || defaultCity;
        currentCity =
          cities.find((city) => currentCity === city.name)?.name || defaultCity;
        setCurrentCity(currentCity);
        setCityConfirmationShown(true);
      }
    }
  }, [cities, cityCookie, userCity]);

  return (
    <div className="location">
      <div className="location__marker">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="#d53032"
            d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
          ></path>
        </svg>
      </div>
      <div
        className="location__city"
        onClick={() => setCitySelectorShown(true)}
      >
        {cityCookie || defaultCity}
      </div>
      <AnimatePresence>
        {isCityConfirmationShown && (
          <CityConfirmation
            userCity={currentCity}
            close={() => setCityConfirmationShown(false)}
            openSelector={() => setCitySelectorShown(true)}
          />
        )}
        {isCitySelectorShown && (
          <CitySelector cities={cities} setIsShown={setCitySelectorShown} />
        )}
      </AnimatePresence>
    </div>
  );
}
