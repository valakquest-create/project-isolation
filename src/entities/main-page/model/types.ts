/* eslint-disable @typescript-eslint/no-unused-vars */
interface CreateMainPageCommand {
  about: string;
}

interface UpdateMainPageCommand {
  id: number;
  data: {
    about: string;
  };
}

interface MainPage {
  id: number;
  about: string;
}
