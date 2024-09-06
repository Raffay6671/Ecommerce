import React, { useState } from "react";
import "../hoverPanels/hoverPanels.css";

const HoverPanels = () => {
  return (
    <>
      <div className="hoverPanels">
        <div className="hoverPanels-subclass">
          <a href="https://stackoverflow.com/questions/23716437/how-to-make-css-dropdown-menu-slidedown">
            <div className="innerText">
              <div className="innerText-heading">
                <h3>SHOP SHORTCODES</h3>
                <h3>CLASSIC</h3>
                <h3>INFOGRAPHIC</h3>
                <h3>PRESENTATION</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default HoverPanels;
