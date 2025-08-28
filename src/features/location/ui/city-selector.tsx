"use client";

import { motion } from "motion/react";
import { City } from "@/entities/city";
import { setCityCookie } from "../model";

import "./city-selector.scss";

export function CitySelector({
  setIsShown,
  cities,
}: {
  setIsShown: (isShown: boolean) => void;
  cities: City[];
}) {
  const handleChangeCity = (city: string) => {
    setCityCookie(city);
    setIsShown(false);
  };

  return (
    <motion.div
      className="city-selector"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="city-selector__title">Выберите другой город:</div>
      <div className="city-selector__list">
        {cities.map((city) => (
          <div
            className="city-selector__list-item"
            key={city.id}
            onClick={() => handleChangeCity(city.name)}
          >
            {city.name}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
