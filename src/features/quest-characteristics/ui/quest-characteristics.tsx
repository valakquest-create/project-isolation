import { Address } from "@/entities/city";
import { Characteristics } from "@/shared/ui/characteristics";

import "./quest-characteristics.scss";

export function QuestCharacteristics({
  duration,
  playerFrom,
  playerTo,
  price,
  fearLevel,
  questName,
  address,
  singUp = true,
  additional = false,
}: {
  duration: number;
  playerFrom: number;
  playerTo: number;
  price: number;
  fearLevel: number;
  questName?: string;
  address?: Address;
  singUp?: boolean;
  additional?: boolean;
}) {
  const horrorLevel = (
    <>
      0/5 Полностью без страха, яркий свет, нет страшных декораций
      <br />
      <br />
      1/5 Полное овещение, возможен страшный декор
      <br />
      <br />
      2/5 Страшный декор, антуражное освещение, возможны скримеры
      <br />
      <br />
      3/5 Страшный декор, скримеры, умеренная игра актера
      <br />
      <br />
      4/5 Страшный декор, скримеры, плотный контакт с актером и механизамами
      <br />
      <br />
      5/5 Страшный декор, частые скримеры, актёр появляется очень часто, очень
      плотный контакт с актёром
    </>
  );

  const priceInfo = (
    <>
      Стоимость квеста за 2 участников - {price} рублей
      <br />
      <br />
      Стоимость за каждого дополнительного игрока - 750 рублей
      <br />
      <br />
      Вечернее время - 1000 рублей к общей стоимости на команду
      <br />
      <br />
      Выходные дни - 1000 рублей к общей стоимости на команду
    </>
  );

  const liteVersions: { [key: string]: React.ReactNode } = {
    art: (
      <div>
        Есть такая работа - готовиться каждый день к Новому Году. Вас отправляют
        расследовать дело о краже Артефакта, способного останавливать время, без
        которого Новый Год не состоится. Но кто же его украл? Великий и ужасный
        Гринч. Будьте начеку, это не так просто: в каждой комнате он видит вас и
        изо всех сил будет пытаться вас остановить.
        <br />
        <br />
        Отправляйтесь в волшебную историю с Гринчем и агентом новогодней
        безопасности - судьба Нового года в ваших руках!
      </div>
    ),
    graveyard: (
      <div>
        Дети попадают в старую лабораторию. Говорят, в этих подвалах когда-то
        проводились опыты, и, возможно, здесь до сих пор обитают призраки.
        Команде придется пройти всю лабораторию и просмотреть все кабинеты в
        поисках информации об этом месте, чтобы выяснить, правдивы ли слухи об
        этом месте?
      </div>
    ),
    uncharted: (
      <div>
        Это место, которое давно не посещали люди, приют считается заброшенным,
        и в нём давно никто не работает. Однако слухи говорят об обратном, и
        ребятам предстоит проверить эту информацию. Настоятельница отправится
        вместе с командой, чтобы помочь детям ориентироваться в этих стенах.
      </div>
    ),
    devil: (
      <div>
        Вы окажетесь в локации старой церкви, чтобы найти сокровища. В процессе
        игры команда узнает множество интересных мистических историй об этом
        месте, и уже им самим решать - правда это или вымысел.
      </div>
    ),
    montemor: (
      <div>
        Это квест с опорой на исторические факты 13 века, создана атмосфера
        замка герцога Монтемора, куда был посажен обычный прохожий. Он узнал,
        что Монтемор хочет свергнуть короля, и отправился во дворец рассказать
        об этом, но его перехватили. Теперь Монтемор хочет его казнить. У ребят
        будет час, чтобы спасти узника и выбраться вместе с ним из замка
        Монтемора.
      </div>
    ),
  };

  const items: Array<{
    title: string;
    content: string;
    className?: string;
    info?: React.ReactNode;
  }> = [
    {
      title: "Время прохождения",
      content: `${duration} минут`,
      className: "characteristics__content_time ",
    },
    {
      title: "Кол-во участников",
      content: `${playerFrom} — ${playerTo}`,
      className: "characteristics__content_players",
    },
    {
      title: "Цена",
      content: `от ${price} руб`,
      className: "characteristics__content_money",
      info: priceInfo,
    },
    {
      title: "Уровень страха",
      content: `${fearLevel} / 5`,
      info: horrorLevel,
    },
    {
      title: "Адрес",
      content: address ? address.place : "-",
    },
    {
      title: "Нестрашная версия квеста",
      content: "",
      info: questName ? liteVersions[questName] : "",
    },
  ];

  return (
    <Characteristics
      items={items}
      className="quest-characteristics"
      singUp={singUp}
      additional={additional}
    />
  );
}
