/* eslint-disable @typescript-eslint/no-unused-vars */

interface QuestPage {
  id: number;
  title: string;
  description: string;
  h1: string;
  content: string;
  questId: number;
}

interface CreateQuestPageCommand {
  title: string;
  description: string;
  h1: string;
  content: string;
  questId: number;
}

interface CreateQuestPageRequest {
  title: string;
  description: string;
  h1: string;
  content: string;
}

interface EditQuestPageCommand {
  title: string;
  description: string;
  h1: string;
  content: string;
  questId: number;
}

interface EditQuestPageRequest {
  title: string;
  description: string;
  h1: string;
  content: string;
}
