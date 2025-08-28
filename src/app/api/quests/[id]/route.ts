import { questRepository } from "@/entities/quest";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  const quest = await questRepository.getQuestById({
    id: parseInt(id),
    isPageIncluded: false,
    isAddressIncluded: true,
  });

  return Response.json(quest);
}
