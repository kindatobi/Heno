import { create } from "zustand";

interface UIStore {
  cartOpen: boolean;
  toggleCart: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
  shopOpen: boolean;
  toggleShop: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  cartOpen: false,
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  shopOpen: false,
  toggleShop: () => set((state) => ({ shopOpen: !state.shopOpen })),
}));
