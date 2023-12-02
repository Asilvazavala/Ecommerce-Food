import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types/types';
import toast from 'react-hot-toast';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  addQuantity: (data: Product) => void;
  removeQuantity: (data: Product) => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast("El producto ya está en el carrito");
      }

      set ({ items: [...get().items, data] });
      toast.success("El producto se agregó al carrito 😀");
    },

    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success("Producto eliminado del carrito.");
    },

    removeAll: () => set({ items: [] }),

    addQuantity: (data: Product) => {
      const currentItems = get().items;
      const updatedItems = currentItems.map((item) =>
        item.id === data.id
          ? { ...item, cantidad: (Number(item.cantidad ) + 1).toString() }
          : item
      );
    
      set({ items: updatedItems });
    },

    removeQuantity: (data: Product) => {      
      const currentItems = get().items;
      const updatedItems = currentItems.map((item) =>
        item.id === data.id
          ? { ...item, cantidad: (Number(item.cantidad) - 1).toString() }
          : item
      );
    
      set({ items: updatedItems });
    },
    
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
)

export default useCart;