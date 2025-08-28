import { Receipt } from "@/features/reservation";
import { QuestButton } from "@/shared/ui/quest-button";

import "./confirmation.scss";

export function Confirmation() {
  return (
    <section className="confirmation">
      <h1 className="confirmation__title">
        Отлично, ваша заявка теперь в обработке
      </h1>

      <div className="confirmation__content">
        <Receipt />

        <p>Будьте внимательны:</p>

        <ul>
          <li>
            Заявки принимаются с 10:00 до 22:00 за два часа до начала сеанса,
          </li>
          <li>
            На поздние сеансы в 22:00, 23:30 и 01:00 мы берем предоплату в
            размере 1000₽,
          </li>
          <li>
            На квест не допускаются лица в алкогольном (и наркотическом)
            опьянении.
          </li>
        </ul>
      </div>

      <QuestButton className="confirmation__button" variant="link" href="/">
        Вернуться на главную
      </QuestButton>
    </section>
  );
}
