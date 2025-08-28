import { notFound } from "next/navigation";
import { EditQuestForm } from "@/features/quest-forms";
import { cityRepository } from "@/entities/city";
import { questRepository } from "@/entities/quest";
import { AdminTitle } from "@/shared/ui/admin-title";

export async function AdminEditQuest({ id }: { id: number }) {
  const questWithPage = await questRepository.getQuestById({
    id,
    isPageIncluded: true,
    isAddressIncluded: false,
  });

  const cities = await cityRepository.getCitiesWithAddresses();

  if (!questWithPage) {
    notFound();
  }

  const revalidatePagePath = ["/", "/admin/quests", `/admin/quests/${id}`];

  return (
    <>
      <AdminTitle title={`Редактировать ${questWithPage?.name}`} />
      <EditQuestForm
        quest={questWithPage!}
        cities={cities}
        page={questWithPage!.page!}
        revalidatePagePath={revalidatePagePath}
      />
    </>
  );
}
