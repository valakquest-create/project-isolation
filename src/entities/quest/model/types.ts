interface Address {
  id: number;
  place: string;
  cityId: number;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
interface Quest {
  id: number;
  name: string;
  uniqueName: string;
  addressId: number | null;
  address: Address;
  basePrice: number;
  duration: number;
  fearLevel: number;
  personFrom: number;
  personTo: number;
  photos: string[];
  isActive: boolean;
}

interface CreateQuestCommand {
  name: string;
  uniqueName: string;
  addressId: number;
  basePrice: number;
  duration: number;
  fearLevel: number;
  personFrom: number;
  personTo: number;
  photos: string[];
  isActive: boolean;
}

interface CreateQuestRequest {
  name: string;
  uniqueName: string;
  addressId: number;
  basePrice: number;
  duration: number;
  fearLevel: number;
  personFrom: number;
  personTo: number;
  photos: string;
  isActive: boolean;
}

interface EditQuestRequest {
  id: number;
  name: string;
  uniqueName: string;
  addressId: number;
  basePrice: number;
  duration: number;
  fearLevel: number;
  personFrom: number;
  personTo: number;
  photos: string;
  isActive: boolean;
}

interface EditQuestCommand {
  id: number;
  name: string;
  uniqueName: string;
  addressId: number;
  basePrice: number;
  duration: number;
  fearLevel: number;
  personFrom: number;
  personTo: number;
  photos: string[];
  isActive: boolean;
}

interface GetQuestByIdCommand {
  id: number;
  isPageIncluded: boolean;
  isAddressIncluded: boolean;
}

interface GetQuestByNameCommand {
  name: string;
  isPageIncluded: boolean;
  isAddressIncluded: boolean;
}
