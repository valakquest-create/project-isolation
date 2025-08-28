import { Characteristics } from "@/shared/ui/characteristics";

import "./characteristics.scss";

export function CertificateCharacteristics() {
  const howToGet = (
    <ul className="certificate-characteristics__list">
      <li>в электронном виде</li>
      <li>в запечатанном конверте с фирменной печатью</li>
      <li>лично в руки от любимого персонажа</li>
      <li>доставкой на дом</li>
    </ul>
  );

  const items = [
    {
      title: "Цена",
      content: `от ${1000} руб`,
      className: "characteristics__content_money",
    },
    {
      title: "Срок действия",
      content: "3 месяца с момента покупки",
      className: "characteristics__content_time",
    },
    {
      title: "Как получить",
      content: howToGet,
    },
    {
      title: "Дизайн",
      content: "на выбор разные варианты дизайна",
      info: "Листай карусель",
    },
  ];

  return (
    <Characteristics items={items} className="certificate-characteristics" />
  );
}
