import React, { useState, useEffect } from "react";
import "../navbar/navbar-module.css";
import SidePanel from "../sidePanel/SidePanel";
import HoverPanels from "../hoverPanels/HoverPanels";

const NavBar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleSidePanel = (event) => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const handleScroll = () => {
    if (isSidePanelOpen) {
      setIsSidePanelOpen(false);
    }
  };

  const manageLogin = () => {
    console.log("Login", isLogin);

    if (isLogin === false) {
      setIsLogin(true);
      console.log("Login", isLogin);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
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
                    </li>
                    <li>
                      <a href="#">PRODUCT TYPES</a>
                    </li>
                    <li>
                      <a href="#">FEATURED</a>
                    </li>
                    <li>
                      <a href="#">LAYOUTS</a>
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
            <a href="/" className="nav-link">
              CART<span className="cart-amount">($0)</span>
            </a>

            <a href="/" className="nav-link" onClick={manageLogin}>
              <i className="fa-regular fa-user"></i>LOGIN
            </a>

            <div className={`Login ${isLogin === false ? "hidden" : ""}`}>
              <div className="login-panel">
                <h2>Login</h2>
                <form>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />

                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />

                  <button type="submit">Login</button>
                </form>
              </div>
            </div>

            <a href="/" className="nav-link">
              <i className="fa fa-search"></i>
            </a>
            <a href="#" className="nav-link" onClick={toggleSidePanel}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>

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
