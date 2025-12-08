import { create } from "zustand";

interface UIStore {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  toggleCart: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  cartOpen: false,
  setCartOpen: (open) => set({ cartOpen: open }),
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
}));
