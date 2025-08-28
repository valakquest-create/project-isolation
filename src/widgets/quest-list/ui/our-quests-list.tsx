import { cityRepository } from "@/entities/city";
import { getCityCookie } from "@/shared/lib/get-city-cookie";
import { OurQuestsItem } from "./our-quests-item";

import "./our-quests.scss";

export async function OurQuests() {
  const city = await getCityCookie();
  const questByCityName = await cityRepository.getCityByNameWithQuests(city)();

  const quests = questByCityName?.addresses.flatMap(
    (address) => address.quests,
  );

  return (
    <section className="quest-section" id="quests">
      <h2 className="quest-section__title">наши квесты</h2>
      <div className="our-quests">
        {quests &&
          quests.map((quest) => <OurQuestsItem key={quest.id} quest={quest} />)}
      </div>
    </section>
  );
}
