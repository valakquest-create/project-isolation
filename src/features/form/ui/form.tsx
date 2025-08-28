import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import "./form.scss";
import { createCertificateOrder } from "../actions";

const formSchema = z.object({
  name: z.string().min(2, { message: "Пожалуйста, укажите ваше имя" }),

  phone: z
    .string()
    .min(10, { message: "Номер телефона должен содержать минимум 10 цифр" }),

  policy: z.literal(true, {
    errorMap: () => ({
      message:
        "Вы должны согласиться с политикой конфиденциальности, чтобы продолжить",
    }),
  }),
});

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "+7 ",
    },
  });

  const [isWaiting, startWaiting] = useTransition();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        startWaiting(async () => {
          const res = await createCertificateOrder(data);
          alert(res);
        });
      })}
    >
      <div className="form__wrapper-input">
        <div className="form__wrapper-top-input">
          <p className="form__wrapper-lable-input">
            <label className="form__label">Ваше имя</label>
            <input
              {...register("name")}
              className="form__input"
              placeholder="Имя"
              type="text"
            />
            {errors.name && (
              <span className="form__error">{errors.name.message}</span>
            )}
          </p>

          <p className="form__wrapper-lable-input">
            <label className="form__label">Ваш телефон</label>
            <input
              {...register("phone")}
              minLength={10}
              type="tel"
              className="form__input"
              id="phone"
              placeholder="Телефон"
            />
            {errors.phone && (
              <span className="form__error">{errors.phone.message}</span>
            )}
          </p>
        </div>

        <div className="form__wrapper-checkbox">
          <label className="form__checkbox-label">
            <input
              type="checkbox"
              className="form__checkbox"
              {...register("policy")}
            />
            <span className="form__checkbox-text">
              Я согласен с{" "}
              <a
                href="/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="form__checkbox-link"
              >
                политикой конфиденциальности
              </a>
            </span>
          </label>
          {errors.policy && (
            <p className="form__error">{errors.policy.message}</p>
          )}
        </div>

        <div className="form__wrapper-bottom-input">
          <div>
            <p className="form__price">
              Цена от:
              <span className="form__price-rub">{`${1000} РУБ`}</span>
            </p>
          </div>
          <div className="form__wrapper-button">
            <button type="submit" className="form__button" disabled={isWaiting}>
              Заказать сертификат
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
