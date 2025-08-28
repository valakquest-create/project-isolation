import { cityRepository } from "@/entities/city";
import { AdminQuestItem } from "./admin-quest-item";

export async function AdminQuestList() {
  const cities = await cityRepository.getAllCitiesWithQuests();
  const flattenQuests = cities.flatMap((city) =>
    city.addresses.flatMap((address) =>
      address.quests.map((quest) => ({
        ...quest,
        address: `${city.name} ${address.place}`,
      })),
    ),
  );

  return (
    <div className="mb-5">
      {flattenQuests.length ? (
        <ul className="grid grid-cols-2 gap-5">
          {flattenQuests.map((quest) => (
            <li key={quest.id}>
              <AdminQuestItem quest={quest} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No quests found</p>
      )}
    </div>
  );
}
