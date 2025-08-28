/* eslint-disable boundaries/element-types */

import { cache } from "react";
import { Address } from "@/entities/city";
import { dbClient } from "@/shared/lib/db";

class QuestRepository {
  createQuest = (command: CreateQuestCommand): Promise<Quest> =>
    dbClient.quest.create({
      data: command,
    });

  updateQuest = ({ id, ...rest }: EditQuestCommand): Promise<Quest> =>
    dbClient.quest.update({
      where: {
        id,
      },
      data: rest,
    });

  getQuestById = (
    command: GetQuestByIdCommand,
  ): Promise<
    (Quest & { page: QuestPage | null } & { address: Address | null }) | null
  > =>
    dbClient.quest.findUnique({
      where: {
        id: command.id,
      },
      include: {
        page: command.isPageIncluded,
        address: command.isAddressIncluded,
      },
    });

  getQuestByName = (
    command: GetQuestByNameCommand,
  ): Promise<(Quest & { page: QuestPage | null }) | null> =>
    dbClient.quest.findUnique({
      where: {
        uniqueName: command.name,
      },
      include: {
        page: command.isPageIncluded,
        address: command.isAddressIncluded,
      },
    });

  qetAllQuests = cache(
    (): Promise<Quest[]> =>
      dbClient.quest.findMany({
        orderBy: {
          id: "asc",
        },
      }),
  );
}

export const questRepository = new QuestRepository();
