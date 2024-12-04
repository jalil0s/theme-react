import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image?: string;
  variant?: {
    name: string;
    [key: string]: any;
  };
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  highlightedItemId: string | null;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setIsOpen: (isOpen: boolean) => void;
  setHighlightedItemId: (id: string | null) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      highlightedItemId: null,
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.id === item.id && i.variant?.name === item.variant?.name
          );

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.variant?.name === item.variant?.name
                  ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                  : i
              ),
            };
          }

          return { items: [...state.items, { ...item, quantity: item.quantity || 1 }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      setIsOpen: (isOpen) => set({ isOpen }),
      setHighlightedItemId: (id) => set({ highlightedItemId: id }),
    }),
    {
      name: 'cart-storage',
    }
  )
);