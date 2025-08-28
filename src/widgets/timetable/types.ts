export interface QuestData {
  questId: number;
  isQuestActive: boolean;
  basePrice: number;
  personCount: {
    from: number;
    to: number;
  };
}
