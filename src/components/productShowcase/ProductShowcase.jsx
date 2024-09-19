import React, { useState, useContext } from "react";

import "../productShowcase/productShowcase-module.css";
import { CartContext } from "../../context/CartContext";

const ProductShowcase = ({ products = [] }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  // Use the CartContext to access addToCart
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-showcase-container">
      {products.map((product) => (
        <a
          href="#!"
          key={product.id}
          className="product-item"
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div className="product-label">{product.label}</div>

          <img src={product.image} alt={product.name} />
          {hoveredProductId === product.id ? (
            <div className="blowup">
              <div className="panel">
                <h4>QUICK LOOK</h4>
              </div>
              <div className="panel-image">
                <i className="fas fa-heart heart-icon"></i>
              </div>
            </div>
          ) : (
            <div className="blowup open">
              <div className="panel">
                <h4>QUICK LOOK</h4>
              </div>
              <div className="panel-image">
                <i className="fas fa-heart heart-icon"></i>
              </div>
            </div>
          )}
          <div className="product-name">{product.name}</div>
          <div
            className={`product-price ${
              hoveredProductId === product.id ? "hidden" : ""
            }`}
          >
            {product.price}
          </div>
          <div className="CartOption">
            <div className="CartOptionBorder">
              <h4
                className={hoveredProductId === product.id ? "visible" : ""}
                onClick={() => addToCart(product)} 
              >
                ADD TO CART
              </h4>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProductShowcase;
