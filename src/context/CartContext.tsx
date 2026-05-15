import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Product {
  id: number | string;
  name: string;
  price: string;
  image: string;
}

interface CartContextType {
  cart: Product[];
  favorites: Product[];
  addToCart: (p: Product) => void;
  removeFromCart: (index: number) => void;
  toggleFavorite: (p: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };
  
  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };
  
  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => 
      prev.find(p => p.id === product.id) 
        ? prev.filter(p => p.id !== product.id) 
        : [...prev, product]
    );
  };

  return (
    <CartContext.Provider value={{ cart, favorites, addToCart, removeFromCart, toggleFavorite }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};