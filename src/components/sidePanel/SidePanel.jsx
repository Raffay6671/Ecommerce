import React, { useEffect, useRef } from "react";
import "../sidePanel/sidePanel.css";

const SidePanel = ({ toggleSidePanel, setIsSidePanelOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsSidePanelOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="sideBar" ref={ref}>
        <div className="innerArea">
          <div className="closeMenu">
            <div className="innercloseMenu">
              <i className="fas fa-times" onClick={toggleSidePanel}></i>
            </div>
          </div>
          <div className="textwidget">
            <h1 className="header">WELCOME</h1>
            <p className="aboutHeader">
              Advertising is the way great brands get to be <br /> great brands.
            </p>
          </div>

          <div className="imagesArea">
            <div className="adjustImages">
              <a
                href="https://www.instagram.com/p/CGhJa8vFOQj/"
                target="_blank"
              >
                <img src="src/assets/images/sidePanel1.jpg" alt="Image 1" />
                <img src="src/assets/images/sidePanel3.jpg" alt="Image 2" />
                <img src="src/assets/images/sidePanel2.jpg" alt="Image 3" />
                <img src="src/assets/images/sidePanel4.jpg" alt="Image 4" />
                <img src="src/assets/images/sidePanel5.jpg" alt="Image 5" />
                <img src="src/assets/images/sidePanel6.jpg" alt="Image 6" />
                <img src="src/assets/images/sidePanel7.jpg" alt="Image 7" />
                <img src="src/assets/images/sidePanel8.jpg" alt="Image 8" />
              </a>
            </div>
          </div>

          <div className="lowerArea">
            <div className="lowerAreaText">
              <h3>We Are Awesome Folow Us</h3>
            </div>

            <div className="lowerAreaIcons">
              <a href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
