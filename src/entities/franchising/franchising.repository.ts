import { dbClient } from "@/shared/lib/db";
import {
  CreateFranchisingCommand,
  UpdateFranchisingCommand,
  Franchising,
} from "./types";

class FranchisingRepository {
  createFranchising = (
    command: CreateFranchisingCommand,
  ): Promise<Franchising> => dbClient.franchising.create({ data: command });

  readFranchising = (): Promise<Franchising | null> =>
    dbClient.franchising.findFirst();

  updateFranchising = (
    command: UpdateFranchisingCommand,
  ): Promise<Franchising> =>
    dbClient.franchising.update({
      where: {
        id: command.id,
      },
      data: command.data,
    });
}

export const franchisingRepository = new FranchisingRepository();
