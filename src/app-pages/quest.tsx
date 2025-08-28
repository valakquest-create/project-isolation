import { notFound } from "next/navigation";
import { QuestContent } from "@/widgets/quest-content";
import { QuestHeader } from "@/widgets/quest-header";
import { TimeTable } from "@/widgets/timetable";
import { questRepository } from "@/entities/quest";

export default async function QuestPage({ slug }: { slug: string }) {
  const quest = await questRepository.getQuestByName({
    name: slug,
    isPageIncluded: true,
    isAddressIncluded: true,
  });

  if (!quest) {
    return notFound();
  }

  const questData = {
    questId: quest.id,
    isQuestActive: quest.isActive,
    basePrice: quest.basePrice,
    personCount: {
      from: quest.personFrom,
      to: quest.personTo,
    },
  };

  return (
    <main>
      <QuestHeader quest={quest} />
      {quest.page && <QuestContent page={quest.page} />}
      <section className="enlist" id="enlist">
        <h2 className="enlist__title">Запись</h2>
        <div className="enlist__wrapper-content">
          <TimeTable quest={questData} />
        </div>
      </section>
    </main>
  );
}
