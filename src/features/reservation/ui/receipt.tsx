"use client";

import { useQuery } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api/api-instance";
import { useReceiptData } from "../model";

import "./receipt.scss";

export function Receipt() {
  const { questId, dateTimeString, price } = useReceiptData();

  const { data, isLoading } = useQuery({
    queryKey: ["quest", `${questId}`],
    queryFn: (meta) =>
      jsonApiInstance<Quest>(`quests/${questId}`, {
        signal: meta.signal,
      }),
  });

  return !isLoading ? (
    <div className="receipt">
      <p>
        Ваше бронирование на квест{" "}
        <span className="receipt__data">«{data?.name}»</span>{" "}
        <span className="receipt__data">
          {dateTimeString && getDateTimeByString(dateTimeString)}
        </span>{" "}
        по адресу <span className="receipt__data">{data?.address.place}</span>{" "}
        принято. Стоимость составит {price} рублей. Для подтверждения сеанса мы
        с вами свяжемся.
      </p>
      <p>
        Если вы хотели задать нам вопрос, не дожидаясь звонка оператора, вы
        можете связаться с нами самостоятельно по номеру{" "}
        <a className="receipt__link" href="tel:89250674023">
          8 (925) 067-40-23
        </a>
      </p>
    </div>
  ) : (
    <p>Загрузка</p>
  );
}

function getDateTimeByString(dateTimeString: string) {
  const [dateString, timeString] = dateTimeString.split(" ");

  return `${dateString} в ${timeString}`;
}
