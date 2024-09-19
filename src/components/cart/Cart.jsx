import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import CartMainBanner from "../cartMainBanner/CartMainBanner.jsx";
import { CartContext } from "../../context/CartContext";
import Footer from "../footerComponent/FooterComponent.jsx";

const Cart = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { cart, removeFromCart } = useContext(CartContext); // Access the cart from CartContext

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}) // Initialize quantity for each item
  );

  // Increment handler
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  // Decrement handler
  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Prevent quantity going below 1
    }));
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
                <i
                  className="fas fa-times"
                  onClick={() => removeFromCart(item.id)}
                ></i>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <span className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="FirstPrice">{item.price}</p>{" "}
                </span>

                <div className="quantity-container">
                  <p>Quantity</p>
                  <div className="quantity-selector">
                    <button
                      className="decrement-btn"
                      onClick={() => handleDecrement(item.id)}
                    >
                      &lt;
                    </button>
                    <span>{quantities[item.id]}</span> {/* Display quantity */}
                    <button
                      className="increment-btn"
                      onClick={() => handleIncrement(item.id)}
                    >
                      &gt;
                    </button>
                  </div>
                </div>

                <span className="LastPrice">
                  $
                  {parseFloat(item.price.replace("$", "")) *
                    quantities[item.id]}
                </span>
              </div>
            ))
          )}

          <div className="coupon-container">
            <div className="FirstTwoItems">
              <div class="coupon-input">
                <input
                  type="text"
                  id="coupon"
                  name="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <button className="apply-coupon">
                <p>APPLY COUPON</p>
              </button>
            </div>

            <div className="FinalItem">
              <button className="update-cart">
                <p>UPDATE CART</p>
              </button>
            </div>
          </div>
          <div className="BacktoShopping">
            <a href="#" class="go-back">
              <i class="fas fa-arrow-left"></i>
              <p>Go Back Shopping</p>
            </a>
          </div>
        </div>
      </div>

      <Footer backgroundColor="black" />
    </div>
  );
};

export default Cart;
