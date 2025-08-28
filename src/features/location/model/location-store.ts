import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface LocationState {
  city: string;
  setCity: (city: string) => void;
}

const useLocationStore = create<LocationState>()(
  devtools(
    persist(
      (set) => ({
        city: "",
        setCity: (city) => set({ city }),
      }),
      {
        name: "city",
        partialize: (state) => ({ city: state.city }),
      },
    ),
  ),
);

export const useCity = () => useLocationStore((state) => state.city);
export const useSetCity = () => useLocationStore((state) => state.setCity);
