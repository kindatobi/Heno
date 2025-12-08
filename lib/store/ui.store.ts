import { create } from "zustand";

interface UIStore {
  cartOpen: boolean;
  toggleCart: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  cartOpen: false,
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
}));
