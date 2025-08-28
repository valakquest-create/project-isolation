"use server";

import { revalidatePath } from "next/cache";
import { franchisingRepository } from "@/entities/franchising";
import {
  CreateFranchisingCommand,
  UpdateFranchisingCommand,
} from "@/entities/franchising/";

export const createFranchisingAction = async (
  command: CreateFranchisingCommand,
  revalidatePagePath: string[],
) => {
  await franchisingRepository.createFranchising(command);
  revalidatePagePath.map((path) => revalidatePath(path));
};

export const updateFranchisingAction = async (
  command: UpdateFranchisingCommand,
  revalidatePagePath: string[],
) => {
  await franchisingRepository.updateFranchising(command);
  revalidatePagePath.map((path) => revalidatePath(path));
};
