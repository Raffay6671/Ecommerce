import React, { createContext, useState } from "react";

// Create CartContext
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...product, originalPrice: product.price }, // Store original price
    ]);
  };

  // Function to remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to update the cart, e.g., updating the price or quantity
  const updateCart = (updatedItems) => {
    setCart(updatedItems); // Replace cart with updated items
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
