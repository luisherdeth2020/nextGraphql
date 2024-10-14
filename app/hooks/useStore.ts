import {create} from 'zustand';

interface BuyState {
  buy: number;
  addBasket: (value: number) => void;
}

export const useStore = create<BuyState>((set) => ({
  buy: 0,
  addBasket: (value: number) => set((state) => ({ buy: Math.max(state.buy + value, 0) })),
}));