/* 
  1) Вынести схему в отдельный файл
  2) Сделать кастомный хук для формы
  3) Переписать контекст на zustand store
  4) Избавиться от props drilling для праздников
*/

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Holiday } from "@/entities/holiday";
import { createOrder } from "../actions";
import { countPrice } from "../count-price";
import { useReceiptActions } from "../model";
import {
  isHoliday,
  isLate,
  isLateHoliday,
  isLateWeekend,
  isWeekend,
} from "../utils";

import "./reservation-form.scss";

interface ITimeTableContextData {
  dateTimeString: string;
  rowNumber: number;
  daysToShow: number;
  isExpanded: boolean;
  isShowAnotherDate: boolean;
  timezone: string;
  dateLength: number;
  anotherDate: string;
}

interface QuestData {
  questId: number;
  isQuestActive: boolean;
  basePrice: number;
  personCount: {
    from: number;
    to: number;
  };
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Пожалуйста, укажите ваше имя" }),

  phone: z
    .string()
    .min(10, { message: "Номер телефона должен содержать минимум 10 цифр" }),

  personCount: z.coerce
    .number()
    .positive({ message: "Введите количество участников" }),

  policy: z.literal(true, {
    errorMap: () => ({
      message:
        "Вы должны согласиться с политикой конфиденциальности, чтобы продолжить",
    }),
  }),
});

export function ReservationForm({
  quest,
  holidays,
  timetableContextData,
  setTimetableContextData,
}: {
  quest: QuestData;
  holidays: Holiday[];
  timetableContextData: ITimeTableContextData;
  setTimetableContextData: React.Dispatch<
    React.SetStateAction<ITimeTableContextData>
  >;
}) {
  const { questId, basePrice, personCount: personCountObject } = quest;
  const { from, to } = personCountObject;

  const { setReceipt } = useReceiptActions();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "+7 ",
      personCount: from,
    },
  });

  const [isStartTransition, createTransition] = useTransition();

  const dateTimeString = timetableContextData.dateTimeString;

  let priceNotice: React.ReactNode | null = null;

  if (isLateHoliday(dateTimeString, holidays)) {
    priceNotice = (
      <p className="reservation-form__price-notice">
        В праздничный день и за поздний сеанс к общей стоимости добавляется
        2000₽
      </p>
    );
  } else if (isLateWeekend(dateTimeString)) {
    priceNotice = (
      <p className="reservation-form__price-notice">
        В выходной день и за поздний сеанс к общей стоимости добавляется 2000₽
      </p>
    );
  } else if (isHoliday(dateTimeString, holidays)) {
    priceNotice = (
      <p className="reservation-form__price-notice">
        В праздничный день к общей стоимости добавляется 1000₽
      </p>
    );
  } else if (isWeekend(dateTimeString)) {
    priceNotice = (
      <p className="reservation-form__price-notice">
        в выходной день к общей стоимости добавляется 1000₽
      </p>
    );
  } else if (isLate(dateTimeString)) {
    priceNotice = (
      <p className="reservation-form__price-notice">
        За поздний сеанс к общей стоимости добавляется 1000₽
      </p>
    );
  }

  const personCount = watch("personCount") || from;

  const totalPrice = countPrice(
    basePrice,
    personCount,
    dateTimeString,
    holidays,
  );

  return (
    <form
      id="reservation-form-id"
      className={`reservation-form`}
      onSubmit={handleSubmit((data) => {
        createTransition(async () => {
          const response = await createOrder({
            ...data,
            dateTimeString,
            questId,
          });

          if (response) {
            alert(response);
          } else {
            setReceipt({
              questId,
              dateTimeString,
              price: totalPrice,
            });

            redirect("/confirmation");
          }
        });
      })}
    >
      <div className="reservation-form__wrapper-text">
        <span className="reservation-form__text">Бронирование</span>
        <span className="reservation-form__date">{dateTimeString}</span>
      </div>
      <div className="reservation-form__wrapper-input">
        <div className="reservation-form__wrapper-top-input">
          <div className="reservation-form__wrapper-lable-input">
            <label className="reservation-form__label" htmlFor="#name">
              Ваше имя
            </label>
            <input
              className="reservation-form__input"
              id="name"
              placeholder="Имя"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <p className="reservation-form__error">{errors.name.message}</p>
            )}
          </div>
          <div className="reservation-form__wrapper-lable-input">
            <label className="reservation-form__label" htmlFor="#phone">
              Ваш телефон
            </label>
            <input
              type="tel"
              id="phone"
              className="reservation-form__input"
              placeholder="Телефон"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="reservation-form__error">{errors.phone.message}</p>
            )}
          </div>
          <div className="reservation-form__wrapper-lable-input">
            <label className="reservation-form__label" htmlFor="#players">
              Кол-во участников
            </label>
            <input
              className="reservation-form__input"
              id="players"
              placeholder="Кол-во"
              type="number"
              min={from}
              max={to}
              {...register("personCount")}
            />
            {errors.personCount && (
              <p className="reservation-form__error">
                {errors.personCount.message}
              </p>
            )}
          </div>
        </div>
        <div className="reservation-form__wrapper-bottom-input">
          <p className="reservation-form__price">
            Сумма:{" "}
            <span className="reservation-form__price-rub">
              {totalPrice} РУБ
            </span>
          </p>
          <div>
            <p className="reservation-form__price">
              Цена от:
              <span className="reservation-form__price-rub">
                {basePrice} РУБ за 2 участников
              </span>
            </p>
            {priceNotice}
          </div>

          <div className="reservation-form__wrapper-checkbox">
            <label className="reservation-form__checkbox-label">
              <input
                type="checkbox"
                className="reservation-form__checkbox"
                {...register("policy")}
              />
              <span>
                Я принимаю{" "}
                <a href="/policy" target="_blank">
                  политику конфиденциальности
                </a>
              </span>
            </label>
            {errors.policy && (
              <p className="reservation-form__checkbox-error">
                {errors.policy.message}
              </p>
            )}
          </div>

          <div className="reservation-form__wrapper-button">
            {!isStartTransition ? (
              <button type="submit" className="reservation-form__button">
                {" "}
                Бронировать{" "}
              </button>
            ) : (
              <React.Fragment />
            )}
            <span
              className="reservation-form__close"
              onClick={() =>
                setTimetableContextData({
                  ...timetableContextData,
                  dateTimeString: "",
                  rowNumber: -1,
                })
              }
            >
              Отменить
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
