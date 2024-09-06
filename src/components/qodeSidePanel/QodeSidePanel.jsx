import React, { useEffect, useRef } from "react";

import "../qodeSidePanel/qodeSidePanel.css";

const QodeSidePanel = ({ toggleQodePanel, setIsQodePanelOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsQodePanelOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div className="qodePanel" ref={ref}>
      <div className="upperArea">
        <i className="fas fa-dot-circle"></i>
        <h3>Qode Interactive</h3>
      </div>

      <div className="middleArea">
        <h4>RELATED THEMES</h4>

        <a
          href="https://qodeinteractive.com/wordpress-theme/elfrida-fashion-jewelry-woocommerce-theme/"
          className="clickable"
        >
          <div className="rbt-theme">
            <div className="rbt-image">
              <img src="src/assets/images/codePanel1.png" alt="Elfrida Theme" />
            </div>
            <div className="rbt-text">
              <h4>Elfrida</h4>
              <div className="rbt-details">
                <h5>WooCommerce</h5>
                <h4>$89</h4>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://qodeinteractive.com/wordpress-theme/elfrida-fashion-jewelry-woocommerce-theme/"
          className="clickable"
        >
          <div className="rbt-theme">
            <div className="rbt-image">
              <img src="src/assets/images/codePanel1.png" alt="Elfrida Theme" />
            </div>
            <div className="rbt-text">
              <h4>Elfrida</h4>
              <div className="rbt-details">
                <h5>WooCommerce</h5>
                <h4>$89</h4>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://qodeinteractive.com/wordpress-theme/elfrida-fashion-jewelry-woocommerce-theme/"
          className="clickable"
        >
          <div className="rbt-theme">
            <div className="rbt-image">
              <img src="src/assets/images/codePanel1.png" alt="Elfrida Theme" />
            </div>
            <div className="rbt-text">
              <h4>Elfrida</h4>
              <div className="rbt-details">
                <h5>WooCommerce</h5>
                <h4>$89</h4>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="footerArea">
        <a href="https://qodeinteractive.com" className="viewAllThemes">
          VIEW ALL QODE THEMES
        </a>
      </div>
    </div>
  );
};

export default QodeSidePanel;
