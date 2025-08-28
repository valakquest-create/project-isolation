export interface Holiday {
  id: number;
  name: string;
  date: Date;
}

export interface CreateHolidayCommand {
  name: string;
  date: Date;
}

export interface UpdateHolidayCommand {
  id: number;
  name: string;
  date: Date;
}

export interface DeleteHolidayCommand {
  id: number;
}
