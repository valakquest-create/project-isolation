import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "@/shared/api/api-instance";

interface City {
  city?: string;
}

export const locationApi = {
  getCityQueryOption: () =>
    queryOptions({
      queryKey: ["city"],
      queryFn: (meta) =>
        jsonApiInstance<City>("/city", {
          signal: meta.signal,
        }),
    }),
};
