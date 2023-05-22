import { create } from "zustand";

export const useCart = create((set) => ({
  products: [],
  setProduct: (payload: any) =>
    set((state: any) => ({ products: [...state.products, payload] })),
}));



