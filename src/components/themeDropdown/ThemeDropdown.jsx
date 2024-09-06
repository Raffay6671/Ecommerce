import React, { useState } from "react";
import "../themeDropdown/themeDropdown.css";
import QodeSidePanel from "../qodeSidePanel/QodeSidePanel";

const ThemeDropdown = () => {
  const [isQodePanelOpen, setIsQodePanelOpen] = useState(false);

  const toggleQodePanel = (event) => {
    setIsQodePanelOpen(!isQodePanelOpen);
  };

  return (
    <>
      <a href="#" onClick={toggleQodePanel}>
        <div className="themeDropdown">
          <div className="themeDropdown_Position">
            <i className="fas fa-dot-circle"></i>
            <h1>RELATED</h1>
          </div>
        </div>
      </a>

      <div className={isQodePanelOpen ? "qodePanel" : "qodePanel open"}>
        <QodeSidePanel
          toggleQodePanel={toggleQodePanel}
          setIsQodePanelOpen={setIsQodePanelOpen}
        />
      </div>
    </>
  );
};

export default ThemeDropdown;
