import { useStore } from './useStore';

export const useBuy = () => {
  const buy = useStore((state) => state.buy);
  const addBasket = useStore((state) => state.addBasket);

  return { buy, addBasket };
};