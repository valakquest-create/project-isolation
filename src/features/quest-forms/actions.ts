"use server";

import { revalidatePath } from "next/cache";
import { questRepository } from "@/entities/quest";
import { questPageRepository } from "@/entities/quest-page";

export const createQuestAction = async (
  request: CreateQuestRequest & CreateQuestPageRequest,
  revalidatePagePath: string[],
) => {
  const { photos, title, description, h1, content, ...rest } = request;

  //Create quest
  const quest = await questRepository.createQuest({
    ...rest,
    photos: photos.length ? photos.split(";") : [],
  });

  //Create quest page
  await questPageRepository.createQuestPage({
    title,
    description,
    h1,
    content,
    questId: quest.id,
  });

  revalidatePagePath.map((path) => revalidatePath(path));
};

export const editQuestAction = async (
  request: EditQuestRequest & EditQuestPageRequest,
  revalidatePagePath: string[],
) => {
  const { id, photos, title, description, h1, content, ...rest } = request;

  await questRepository.updateQuest({
    id,
    ...rest,
    photos: photos.length ? photos.split(";") : [],
  });

  await questPageRepository.editQuestPage({
    questId: id,
    title,
    description,
    h1,
    content,
  });

  revalidatePagePath.map((path) => revalidatePath(path));
};
