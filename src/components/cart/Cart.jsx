import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import CartMainBanner from "../cartMainBanner/CartMainBanner.jsx";
import { CartContext } from "../../context/CartContext";
import Footer from "../footerComponent/FooterComponent.jsx";
import SidePanel from "../sidePanel/SidePanel";

const Cart = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("flatRate");
  const { cart, removeFromCart, updateCart } = useContext(CartContext);

  const [shippingCost, setShippingCost] = useState(0);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isChangeAddress, setChangeAddress] = useState(false);
  const [isUpdateButton, setUpdateButton] = useState(false);
  const [isMulPrice, isSetMulPrice] = useState(0);

  const toggleUpdateButton = () => {
    const updatedCart = cart.map((item) => {
      const updatedPrice = (
        parseFloat(item.originalPrice.replace("$", "")) * quantities[item.id]
      ).toFixed(2);
      return { ...item, price: `$${updatedPrice}` };
    });

    updateCart(updatedCart);
  };

  const toggleChangeAddress = () => {
    setChangeAddress(!isChangeAddress);
  };

  const toggleSidePanel = (event) => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };
  const handleScroll = () => {
    if (isSidePanelOpen) {
      setIsSidePanelOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidePanelOpen]);

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "flatRate") {
      setShippingCost(10);
    } else {
      setShippingCost(0);
    }
  };

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace("$", "")); // Use the updated price here
        const itemTotal = itemPrice * quantities[item.id]; // Multiply by the quantity
        return total + itemTotal; // Add to the total
      }, 0)
      .toFixed(2); // Return the total as a string with two decimals
  };

  const totalPrice = calculateTotalPrice();

  const finalTotalPrice = (parseFloat(totalPrice) + shippingCost).toFixed(2);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
                    <a
                      href="#"
                      className="cartNav-linkSide"
                      onClick={toggleSidePanel}
                    >
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
                  <p className="FirstPrice">{item.originalPrice}</p>{" "}
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

                <span className="LastPrice">{item.price}</span>
              </div>
            ))
          )}

          <div className="coupon-container">
            <div className="FirstTwoItems">
              <div className="coupon-input">
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
              <button className="update-cart" onClick={toggleUpdateButton}>
                <p>UPDATE CART</p>
              </button>
            </div>
          </div>
          <div className="BacktoShopping">
            <Link to="/" className="go-back">
              <i className="fas fa-arrow-left"></i>
              <p>Go Back Shopping</p>
            </Link>
          </div>
        </div>

        {/* NOW START THE BILLING DIVISIONS */}
        <div className="cart-totals">
          <h2>CART TOTALS</h2>

          <div className="totals-item">
            <span className="item-left">SUBTOTAL</span>
            <span className="item-center">${totalPrice}</span>
          </div>

          <div className="shipping-section">
            <span>SHIPPING</span>

            <div className="shipping-options">
              <label>
                <input
                  type="radio"
                  name="shipping"
                  value="freeShipping"
                  checked={selectedOption === "freeShipping"}
                  onChange={handleOptionChange}
                />
                Free shipping
              </label>
              <label>
                <input
                  type="radio"
                  name="shipping"
                  value="localPickup"
                  checked={selectedOption === "localPickup"}
                  onChange={handleOptionChange}
                />
                Local pickup
              </label>
              <label>
                <input
                  type="radio"
                  name="shipping"
                  value="flatRate"
                  checked={selectedOption === "flatRate"}
                  onChange={handleOptionChange}
                />
                Flat Rate: $10
              </label>
            </div>

            <p>
              Shipping to <strong>Pakistan</strong>.
            </p>

            <button className="change-address" onClick={toggleChangeAddress}>
              CHANGE ADDRESS
              <i class="fas fa-caret-down" style={{ marginLeft: "6px" }}></i>
            </button>

            <div
              className={`address-form ${
                isChangeAddress ? "slide-down" : "slide-up"
              }`}
            >
              <select>
                <option value="pakistan">Pakistan</option>
              </select>

              <select>
                <option value="state">State / County</option>
              </select>

              <input type="text" placeholder="City" />
              <input type="text" placeholder="Postcode / ZIP" />

              <button className="update-btn">UPDATE</button>
            </div>
          </div>

          <div className="totals-itemFinal">
            <span className="FinalText">TOTAL</span>
            <span className="FinalPrice">${finalTotalPrice}</span>
          </div>

          <button className="checkout-button">PROCEED TO CHECKOUT</button>
        </div>
      </div>

      <Footer backgroundColor="black" />
      <div className={isSidePanelOpen ? "sideBar" : "sideBar open"}>
        <SidePanel
          toggleSidePanel={toggleSidePanel}
          setIsSidePanelOpen={setIsSidePanelOpen}
        />
      </div>
    </div>
  );
};

export default Cart;
