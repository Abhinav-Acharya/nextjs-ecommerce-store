import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProduct } from "@/types";
import { toast } from "react-hot-toast";

interface ICartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("You have already added this item into cart.");
        }

        set({ items: [...currentItems, data] });
        toast.success("Item added to cart !");
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast("Item removed from cart");
      },

      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
