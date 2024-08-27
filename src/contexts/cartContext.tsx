"use client";
import { Product } from "@/types/product";
import { createContext, useState, ReactNode, useContext } from "react";

type CartContextType = {
  items: Product[];
  setItems: (items: Product[]) => void;
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  subtotal: number;
  increaseQuantity: (item: Product) => void;
  decreaseQuantity: (item: Product) => void;
  isItemInCart: (productId: number) => boolean;
};

const defaultCartContextValue: CartContextType = {
  items: [],
  setItems: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  subtotal: 0,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  isItemInCart: () => false,
};
const CartContext = createContext<CartContextType>(defaultCartContextValue);
export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);
  const addItemToCart = (item: Product) => {
    const existingItem = items.find((cartItem) => item.id === cartItem.id);
    if (existingItem) {
      const updatedItems = items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setItems(updatedItems);
    } else {
      setItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item: Product) => {
    setItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id),
    );
  };

  const increaseQuantity = (item: Product) => {
    setItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    );
  };
  const decreaseQuantity = (item: Product) => {
    setItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
  };
  const isItemInCart = (productId: number): boolean => {
    return items.some((item) => item.id === productId);
  };

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItemToCart,
        removeItemFromCart,
        subtotal,
        increaseQuantity,
        decreaseQuantity,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
