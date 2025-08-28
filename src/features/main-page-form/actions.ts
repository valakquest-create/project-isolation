"use server";

import { revalidatePath } from "next/cache";
import { mainPageRepository } from "@/entities/main-page";

export const createMainPageAction = async (
  command: CreateMainPageCommand,
  revalidatePagePath: string[],
) => {
  await mainPageRepository.createMainPage(command);
  revalidatePagePath.map((path) => revalidatePath(path));
};

export const updateMainPageAction = async (
  command: UpdateMainPageCommand,
  revalidatePagePath: string[],
) => {
  await mainPageRepository.editMainPage(command);
  revalidatePagePath.map((path) => revalidatePath(path));
};
