import React, { createContext, useState } from "react";

// Create CartContext
export const CartContext = createContext();

// CartProvider will be used to wrap the entire application and provide the cart data
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove product from the cart (if needed)
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
