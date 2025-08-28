import { dbClient } from "@/shared/lib/db";

class QuestPageRepository {
  createQuestPage = (
    command: CreateQuestPageCommand,
  ): Promise<QuestPage | null> =>
    dbClient.questPage.create({
      data: command,
    });

  editQuestPage = ({
    questId,
    ...rest
  }: EditQuestPageCommand): Promise<QuestPage | null> =>
    dbClient.questPage.update({
      where: {
        questId: questId,
      },
      data: rest,
    });
}

export const questPageRepository = new QuestPageRepository();
