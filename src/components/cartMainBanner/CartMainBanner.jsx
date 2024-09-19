import React from "react";
import "../cartMainBanner/cartMainBanner.css";

const CartMainBanner = () => {
  return (
    <>
      <div className="cartMainText">
        <p>CART</p>
      </div>
      <div className="MainImage">
        <img src="src\assets\images\cartMainBanner.jpg" alt="cartMainBanner">
          {}
        </img>
      </div>
    </>
  );
};

export default CartMainBanner;
