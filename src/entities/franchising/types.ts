export interface Franchising {
  id: number;
  title: string;
  description: string;
}

export interface CreateFranchisingCommand {
  title: string;
  description: string;
}

export interface UpdateFranchisingCommand {
  id: number;
  data: {
    title: string;
    description: string;
  };
}
