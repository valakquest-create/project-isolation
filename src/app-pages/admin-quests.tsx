import { AdminQuestList } from "@/widgets/quest-list";
import { CreateQuestForm } from "@/features/quest-forms";
import { cityRepository } from "@/entities/city";
import { AdminTitle } from "@/shared/ui/admin-title";

export default async function AdminQuests() {
  const revalidatePagePath = ["/admin/quests", "/"];

  const cities = await cityRepository.getCitiesWithAddresses();

  return (
    <>
      <AdminTitle title="Quests" />
      <AdminQuestList />
      <CreateQuestForm
        cities={cities}
        revalidatePagePath={revalidatePagePath}
      />
    </>
  );
}
