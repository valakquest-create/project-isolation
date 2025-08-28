import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api/api-instance";
import { Contact } from "../model";

export const contactsApi = {
  getContactsQueryOptions: () => {
    return queryOptions({
      queryKey: ["contacts"],
      queryFn: (meta) =>
        jsonApiInstance<Contact[]>("/contacts", {
          signal: meta.signal,
        }),
    });
  },
};
