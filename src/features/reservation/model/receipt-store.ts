import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ReceiptData {
  dateTimeString: string;
  questId: number;
  price: number;
}

interface ReceiptState {
  data: ReceiptData;
  actions: {
    setReceipt: (data: ReceiptData) => void;
  };
}

const useReceiptStore = create<ReceiptState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          data: {
            dateTimeString: "",
            questId: 0,
            price: 0,
          },

          actions: {
            setReceipt: (receiptData) => set(() => ({ data: receiptData })),
          },
        }),
        {
          name: "receipt",
          partialize: (state) => ({ data: state.data }),
        },
      ),
    ),
  ),
);

export const useReceiptData = () => useReceiptStore((state) => state.data);
export const useReceiptActions = () =>
  useReceiptStore((state) => state.actions);
