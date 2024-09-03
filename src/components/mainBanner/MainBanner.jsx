import React from "react";
import "../mainBanner/mainBanner-module.css";

const MainBanner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">THINK DIFFERENT.</h1>

          <p className="banner-subtitle">
            Depot is a unique & captivating theme designed <br /> specifically
            for types of shops and online Stores.
          </p>
        </div>
        <img
          src="src\assets\images\Banner.png"
          alt="Chair"
          className="hero-image"
        />
      </div>
    </>
  );
};

export default MainBanner;
