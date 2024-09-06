import React, { useState, useEffect } from "react";
import "../navbar/navbar-module.css";
import SidePanel from "../sidePanel/SidePanel";
import HoverPanels from "../hoverPanels/HoverPanels";

const NavBar = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const toggleSidePanel = (event) => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const handleScroll = () => {
    if (isSidePanelOpen) {
      setIsSidePanelOpen(false);
    }
  };

  const handleMouseLeave = (e) => {
    if (!e.relatedTarget || !e.relatedTarget.closest(".hoverPanels")) {
      setIsShown(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <a
              href="/"
              className="nav-link"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              HOME
            </a>

            <a
              href="/"
              className="nav-link"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              SHOP
            </a>

            <a
              href="/"
              className="nav-link"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              PAGES
            </a>
            <a
              href="/"
              className="nav-link"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={handleMouseLeave}
            >
              {" "}
              ELEMENTS
            </a>
          </div>
          <div className="navbar-center">
            <img src="src/assets/images/Depot.png" alt="Depot" />
          </div>
          <div className="navbar-right">
            <a href="/" className="nav-link">
              CART<span className="cart-amount">($0)</span>
            </a>
            <a href="/" className="nav-link">
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

      <div className={isSidePanelOpen ? "sideBar" : "sideBar open"}>
        <SidePanel
          toggleSidePanel={toggleSidePanel}
          setIsSidePanelOpen={setIsSidePanelOpen}
        />
      </div>

      <div
        className={isShown ? "hoverPanels" : "hoverPanels open"}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={handleMouseLeave}
      >
        <HoverPanels />
      </div>
    </>
  );
};

export default NavBar;
