import { create } from "zustand";

interface CartStore {
  cartOpen: [];
}

export const useCartStore = create((set, get) => ({
  cart: [],
  addItemToBag: () => {},
}));
