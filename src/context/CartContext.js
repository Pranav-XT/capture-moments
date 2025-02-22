import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {

        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  };


  const removeFromCart = (id, newQuantity = 0) => {
    setCartItems((prevCartItems) => {

      if (newQuantity === 0) {
        return prevCartItems.filter((item) => item.id !== id);
      }

      // Otherwise, update the quantity of the item
      return prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);
