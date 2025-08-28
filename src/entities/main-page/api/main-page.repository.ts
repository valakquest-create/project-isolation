import { dbClient } from "@/shared/lib/db";

class MainPageRepository {
  createMainPage = (command: CreateMainPageCommand): Promise<MainPage> =>
    dbClient.mainPage.create({
      data: command,
    });

  editMainPage = (command: UpdateMainPageCommand): Promise<MainPage> =>
    dbClient.mainPage.update({
      where: {
        id: command.id,
      },
      data: command.data,
    });

  getMainPage = (): Promise<MainPage | null> => dbClient.mainPage.findFirst();
}

export const mainPageRepository = new MainPageRepository();
