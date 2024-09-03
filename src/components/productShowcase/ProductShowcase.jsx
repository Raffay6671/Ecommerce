import React from "react";
import "../productShowcase/productShowcase-module.css";

const products = [
  {
    id: 1,
    name: "BASKET WITH HANDLES",
    price: "$160",
    label: "NEW",
    image: "src/assets/images/product1.jpg",
  },
  {
    id: 2,
    name: "FLOWER VASE",
    price: "$120",
    label: "NEW",
    image: "src/assets/images/product2.jpg",
  },
  {
    id: 3,
    name: "DECO ACCESSORY",
    price: "$200",
    label: "NEW",
    image: "src/assets/images/product3.jpg",
  },
  {
    id: 4,
    name: "WALL CLOCK",
    price: "$180",
    label: "NEW",
    image: "src/assets/images/product4.jpg",
  },
  {
    id: 5,
    name: "TABLE LAMP",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product5.jpg",
  },

  {
    id: 6,
    name: "PORTRAY VASE",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product6.jpg",
  },

  {
    id: 7,
    name: "Rose Holdback",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product7.jpg",
  },

  {
    id: 8,
    name: "PORTRAY VASE",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product6.jpg",
  },

  {
    id: 9,
    name: "Rose Holdback",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product7.jpg",
  },
];

const ProductShowcase = () => {
  return (
    <div className="product-showcase-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <div className="product-label">{product.label}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
