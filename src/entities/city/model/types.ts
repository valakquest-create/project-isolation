export interface Address {
  id: number;
  place: string;
  cityId: number;
}

export interface City {
  id: number;
  name: string;
  map: string;
}

export type CityWithAddresses = City & {
  addresses: Address[];
};

export interface CreateCityCommand {
  name: string;
  map: string;
}

export interface UpdateCityCommand {
  name: string;
  map: string;
}

export interface DeleteCityCommand {
  id: number;
}

export interface CreateAddressCommand {
  cityId: number;
  place: string;
}

export interface DeleteAddressCommand {
  id: number;
}
