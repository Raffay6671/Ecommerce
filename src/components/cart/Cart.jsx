import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../cart/cart.css";
import CartMainBanner from "../cartMainBanner/CartMainBanner.jsx";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const { cart, removeFromCart } = useContext(CartContext); // Access the cart from CartContext

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar
  };
  return (
    <div>
      <nav className="cartNavbar">
        <div className="cartNavbar-container">
          <div className="cartNavbar-left">
            <img src="src/assets/images/Depot.png" alt="Depot" />
          </div>

          <div className="hamburger-menu" onClick={toggleSidebar}>
            MENU <i className="fa fa-bars"></i>
          </div>

          <div className={`sidebar ${isSidebarOpen ? "" : "open"}`}>
            <div className="closeMenu">
              <div className="innercloseMenu">
                <i className="fas fa-times"></i>
              </div>
            </div>
            <div className="MenuItems">
              <ul>
                <li>
                  <a href="/">
                    HOME <i className="fa fa-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    SHOP<i className="fa fa-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    PAGES<i className="fa fa-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    BLOG<i className="fa fa-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    PORTFOLIO<i className="fa fa-caret-right"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="ElementsAdjustSideBar">
                    ELEMENTS<i className="fa fa-caret-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="cartNavbar-right">
            <div className="adjustPrevious">
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/">SHOP</a>
                </li>
                <li>
                  <a href="/">PAGES</a>
                </li>
                <li>
                  <a href="/">BLOG</a>
                </li>
                <li>
                  <a href="/">PORTFOLIO</a>
                </li>
                <li>
                  <a href="/" className="ElementsAdjust">
                    ELEMENTS
                  </a>
                </li>
                <div className="AdjustAfter">
                  <li>
                    <Link to="/cart" className="cartNav-link">
                      CART<span className="cart-amount">($0)</span>
                    </Link>
                  </li>

                  <li>
                    <a href="#" className="cartNav-link">
                      <i className="fa-regular fa-user"></i>LOGIN
                    </a>
                  </li>

                  <li>
                    <a href="#" className="cartNav-link">
                      <i className="fa fa-bars"></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <CartMainBanner />

      <div className="container">
        <div className="shopping-cart">
          <h2>SHOPPING CART</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={item.id}>
                {/* Remove item from cart (Implement this feature later) */}
                <i
                  className="fas fa-times"
                  onClick={() => removeFromCart(item.id)}
                ></i>

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                {/* Product Details */}
                <span className="cart-item-details">
                  <h3>{item.name}</h3> {/* Name of the product */}
                  <p className="FirstPrice">{item.price}</p>{" "}
                  
                </span>

                {/* Quantity Selector */}
                <div className="quantity-container">
                  <p>Quantity</p>
                  <div className="quantity-selector">
                    <button className="decrement-btn">&lt;</button>
                    <span>1</span>
                    <button className="increment-btn">&gt;</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
