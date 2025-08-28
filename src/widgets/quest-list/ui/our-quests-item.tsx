import Link from "next/link";
import { QuestCharacteristics } from "@/features/quest-characteristics";
import { getImagePath } from "@/shared/lib/get-image-path";

export function OurQuestsItem({ quest }: { quest: Quest }) {
  const {
    uniqueName,
    duration,
    basePrice,
    personFrom,
    personTo,
    fearLevel,
    photos,
  } = quest;

  const thumbnail = photos[0];

  return (
    <Link
      className="our-quests__item"
      style={{
        backgroundImage: `url(${getImagePath(thumbnail)})`,
      }}
      href={`quests/${uniqueName}`}
    >
      <QuestCharacteristics
        duration={duration}
        playerFrom={personFrom}
        playerTo={personTo}
        price={basePrice}
        fearLevel={fearLevel}
        singUp={false}
      />
    </Link>
  );
}
