import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { APIArracheraBurger, Product } from '@/types/types';
import toast from 'react-hot-toast';

interface CartStore {
  items: APIArracheraBurger[];
  addItem: (data: APIArracheraBurger) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: APIArracheraBurger) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === Number(data.id))

      if (existingItem) {
        return toast("El producto ya está en el carrito");
      }

      set ({ items: [...get().items, data] });
      toast.success("El producto se agregó al carrito 😀");
    },

    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== Number(id))] });
      toast.success("Producto elminado del carrito.");
    },

    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
)

export default useCart;