import { QuestCharacteristics } from "@/features/quest-characteristics";
import { Slider } from "@/features/slider";
import { getImagePath } from "@/shared/lib/get-image-path";
import { PageHeaderLayout } from "@/shared/ui/page-header";
import { ScrollDown } from "@/shared/ui/scroll-down";

import "./quest-header.scss";

export function QuestHeader({ quest }: { quest: Quest }) {
  const {
    duration,
    basePrice,
    personFrom,
    personTo,
    fearLevel,
    photos,
    uniqueName,
    address,
  } = quest;

  const images = photos.map((photo) => getImagePath(photo));

  return (
    <PageHeaderLayout
      slider={<Slider images={images} />}
      characteristics={
        <QuestCharacteristics
          duration={duration}
          price={basePrice}
          playerFrom={personFrom}
          playerTo={personTo}
          fearLevel={fearLevel}
          questName={uniqueName}
          address={address}
          additional={true}
        />
      }
      scrollDown={<ScrollDown />}
    />
  );
}
