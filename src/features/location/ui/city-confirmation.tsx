"use client";

import { motion } from "motion/react";

import "./city-confirmation.scss";
import { setCityCookie } from "../model";

export function CityConfirmation({
  userCity,
  close,
  openSelector,
}: {
  userCity: string;
  close: () => void;
  openSelector: () => void;
}) {
  const handleConfirm = () => {
    setCityCookie(userCity);
    close();
  };

  const handleChange = () => {
    close();
    openSelector();
  };

  return (
    <motion.div
      className="city-confirmation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="city-confirmation__title">Ваш город {userCity}?</div>
      <div className="city-confirmation__buttons">
        <button
          className="city-confirmation__confirm"
          onClick={() => handleConfirm()}
        >
          Да
        </button>
        <button
          className="city-confirmation__change"
          onClick={() => handleChange()}
        >
          Сменить
        </button>
      </div>
    </motion.div>
  );
}
