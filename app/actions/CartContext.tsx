"use client"; // ✅ Add this at the top

import React, { createContext, useContext, useState, useEffect } from "react";
import { getCartItems, addToCart } from "@/app/actions/cart";
import { Product } from "@/types/Products";

interface CartContextType {
  cartCount: number;
  cartSubtotal: number;
  handleAddToCart: (item: Product, selectedQuantity?: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartSubtotal, setCartSubtotal] = useState<number>(0);

  const updateCart = () => {
    const cart = getCartItems();
    const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

    setCartCount(count);
    setCartSubtotal(subtotal);
  };

  const handleAddToCart = (item: Product, selectedQuantity: number = 1) => {
    addToCart(item, selectedQuantity);
    updateCart();
  };

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, cartSubtotal, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
