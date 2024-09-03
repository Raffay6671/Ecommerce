import React from "react";
import "../navbar/navbar-module.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="/" className="nav-link">
              HOME
            </a>
            <a href="/" className="nav-link">
              SHOP
            </a>
            <a href="/" className="nav-link">
              PAGES
            </a>
            <a href="/" className="nav-link">
              ELEMENTS
            </a>
          </div>
          <div className="navbar-center">
            <img src="src\assets\images\Depot.png" alt="Depot" />
          </div>
          <div className="navbar-right">
            <a href="/" className="nav-link">
              CART<span className="cart-amount">($0)</span>
            </a>
            <a href="/" className="nav-link">
              <i class="fa-regular fa-user"></i>LOGIN
            </a>

            <a href="/" className="nav-link">
              <i className="fa fa-search"></i>
            </a>
            <a href="/" className="nav-link">
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
