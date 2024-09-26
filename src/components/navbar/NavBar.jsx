import React, { useState, useEffect, useRef } from "react";
import "../navbar/navbar-module.css";
import SidePanel from "../sidePanel/SidePanel";
import HoverPanels from "../hoverPanels/HoverPanels";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const loginPanelRef = useRef(null); // Reference for the login panel

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
      window.removeEventListener("scroll", handleScroll); // Cleanup when component unmounts
    };
  }, [isSidePanelOpen]);

  const manageLogin = () => {
    setIsLogin(!isLogin);
  };

  // Handle click outside the login panel to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginPanelRef.current &&
        !loginPanelRef.current.contains(event.target)
      ) {
        setIsLogin(false); // Close login panel if clicked outside
      }
    };

    if (isLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLogin]);

  return (
    <>
      <nav className={`navbar ${isLogin ? "blurred" : ""}`}>
        <div className={`navbar-container ${isLogin ? "blurred" : ""}`}>
          <div className="navbar-left">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">SHOP</a>
                <a href="/">
                  <ul className="submenu">
                    <li>
                      <a href="#">SHOP TYPES</a>
                      <ul className="insideShopTypes">
                        <li>
                          <a href="#">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="#">With Filter</a>
                        </li>
                        <li>
                          <a href="#">Masonry - Grid</a>
                        </li>
                        <li>
                          <a href="#">Masonry - Wide</a>
                        </li>
                        <li>
                          <a href="#">Shop Carousel</a>
                        </li>
                        <li>
                          <a href="#">Shop Boxed</a>
                        </li>
                        <li>
                          <a href="#">Single Category</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">PRODUCT TYPES</a>
                      <ul className="insideProductTypes">
                        <li>
                          <a href="#">Standard Product</a>
                        </li>
                        <li>
                          <a href="#">Grouped Product</a>
                        </li>
                        <li>
                          <a href="#">Variable Product</a>
                        </li>
                        <li>
                          <a href="#">Downloadable Product</a>
                        </li>
                        <li>
                          <a href="#">Virtual Product</a>
                        </li>
                        <li>
                          <a href="#">External Product</a>
                        </li>
                        <li>
                          <a href="#">New! Product</a>
                        </li>
                        <li>
                          <a href="#">On Sale Product</a>
                        </li>
                        <li>
                          <a href="#">Out of Stock Product</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">FEATURED</a>
                      <ul className="insideFeatured">
                        <li>
                          <a href="#">User Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Order Tracking</a>
                        </li>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">Cart</a>
                        </li>
                        <li>
                          <a href="#">Checkout</a>
                        </li>
                        <li>
                          <a href="#">Addresses</a>
                        </li>
                        <li>
                          <a href="#">Payment Methods</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">LAYOUTS</a>
                      <ul className="insideLayouts">
                        <li>
                          <a href="#">Two Columns Grid</a>
                        </li>
                        <li>
                          <a href="#">Three Columns Grid</a>
                        </li>
                        <li>
                          <a href="#">Four Columns Grid</a>
                        </li>
                        <li>
                          <a href="#">Four Columns Wide</a>
                        </li>
                        <li>
                          <a href="#">Five Columns Wide</a>
                        </li>
                        <li>
                          <a href="#">Six Columns Wide</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="/">PAGES</a>
              </li>
              <li>
                <a href="/">ELEMENTS</a>
              </li>
            </ul>
          </div>
          <div className="navbar-center">
            <img src="src/assets/images/Depot.png" alt="Depot" />
          </div>
          <div className="navbar-right">
            <Link to="/cart" className="nav-link">
              CART<span className="cart-amount">($0)</span>
            </Link>

            <a href="#" className="nav-link" onClick={manageLogin}>
              <i className="fa-regular fa-user"></i>LOGIN
            </a>

            <a href="/" className="nav-link">
              <i className="fa fa-search"></i>
            </a>
            <a href="#" className="nav-link" onClick={toggleSidePanel}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>
      {/* ****************Outside the navBar************ */}
      {isLogin && (
        <div className="login-overlay">
          <div className="Login" ref={loginPanelRef}>
            <div className="login-panel">
              <div className="top-Text">
                <a href="">
                  <div className="login-Text">
                    <p>LOGIN</p>
                  </div>
                </a>
                <a href="">
                  <div className="register-Text">
                    <p>REGISTER</p>
                  </div>
                </a>
              </div>

              <form>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="User Name"
                  required
                />

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />

                <div class="form-group">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      name="remember"
                      class="custom-checkbox"
                    />
                    Remember me
                  </label>
                  <a href="#" class="forgot-password">
                    Lost your password?
                  </a>
                </div>

                <button type="submit">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className={isSidePanelOpen ? "sideBar" : "sideBar open"}>
        <SidePanel
          toggleSidePanel={toggleSidePanel}
          setIsSidePanelOpen={setIsSidePanelOpen}
        />
      </div>
    </>
  );
};

export default NavBar;
