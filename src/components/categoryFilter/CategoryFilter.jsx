import React, { useState, useEffect, useRef } from "react";

import "../categoryFilter/categoryFilter.css";
import ProductShowcase from "../productShowcase/ProductShowcase.jsx";

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
];

const HomeDecor = [
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
];

const Lighting = [
  {
    id: 1,
    name: "PORTRAY VASE",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product6.jpg",
  },
];

const Decoration = [
  {
    id: 1,
    name: "BASKET WITH HANDLES",
    price: "$160",
    label: "NEW",
    image: "src/assets/images/product1.jpg",
  },
];

const Vases = [
  {
    id: 1,
    name: "PORTRAY VASE",
    price: "$90",
    label: "NEW",
    image: "src/assets/images/product6.jpg",
  },
];

const Basics = [
  {
    id: 1,
    name: "BASKET WITH HANDLES",
    price: "$160",
    label: "NEW",
    image: "src/assets/images/product1.jpg",
  },
];

const CategoryFilter = () => {
  const [isProducts, setProducts] = useState(true);
  const [isHomeDecorSent, setHomeDecorSent] = useState(false);
  const [isLightingSent, setLighting] = useState(false);
  const [isDecorationSent, setDecoration] = useState(false);
  const [isVasesSent, setVases] = useState(false);
  const [isBasicsSent, setBasics] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const onCLickProducts = (filterName) => {
    setProducts(true);
    setHomeDecorSent(false);
    setLighting(false);
    setDecoration(false);
    setVases(false);
    setBasics(false);
    setActiveFilter(filterName);
  };

  const onCLickHomeDecor = () => {
    setProducts(false);
    setHomeDecorSent(true);
    setLighting(false);
    setDecoration(false);
    setVases(false);
    setBasics(false);
    setActiveFilter("HOME DECOR");
  };

  const onCLickLighting = () => {
    setProducts(false);
    setHomeDecorSent(false);
    setLighting(true);
    setDecoration(false);
    setVases(false);
    setBasics(false);
    setActiveFilter("LIGHTING");
  };

  const onCLickDecoration = () => {
    setProducts(false);
    setHomeDecorSent(false);
    setLighting(false);
    setDecoration(true);
    setVases(false);
    setBasics(false);
    setActiveFilter("DECORATION");
  };

  const onCLickVases = () => {
    setProducts(false);
    setHomeDecorSent(false);
    setLighting(false);
    setDecoration(false);
    setVases(true);
    setBasics(false);
    setActiveFilter("VASES");
  };

  const onCLickBasics = () => {
    setProducts(false);
    setHomeDecorSent(false);
    setLighting(false);
    setDecoration(false);
    setVases(false);
    setBasics(true);
    setActiveFilter("BASICS");
  };

  return (
    <div className="category-filter-container">
      <div className="filter-options">
        <ul className="filter-list">
          <li
            className={`filter-item ${activeFilter === "ALL" ? "active" : ""}`}
            onClick={() => onCLickProducts("ALL")}
          >
            ALL
          </li>

          <li
            className={`filter-item ${
              activeFilter === "HOME DECOR" ? "active" : ""
            }`}
            onClick={onCLickHomeDecor}
          >
            HOME DECOR
          </li>

          <li
            className={`filter-item ${
              activeFilter === "LIGHTING" ? "active" : ""
            }`}
            onClick={onCLickLighting}
          >
            LIGHTING
          </li>

          <li
            className={`filter-item ${
              activeFilter === "DECORATION" ? "active" : ""
            }`}
            onClick={onCLickDecoration}
          >
            DECORATION
          </li>

          <li
            className={`filter-item ${
              activeFilter === "VASES" ? "active" : ""
            }`}
            onClick={onCLickVases}
          >
            VASES
          </li>

          <li
            className={`filter-item ${
              activeFilter === "BASICS" ? "active" : ""
            }`}
            onClick={onCLickBasics}
          >
            BASICS
          </li>
        </ul>

        <div className="filter-action">
          FILTER <i className="fa fa-chevron-down"></i>
          <div className="filter-panel">
            <ul className="InsideItems">
              <li>
                <div className="SortItems">
                  <h6>SORT BY</h6>
                  <div className="ListSortItems">
                    <ul>
                      <li>
                        <a href="/">Default</a>
                      </li>
                      <li>
                        <a href="/">Popularity</a>
                      </li>

                      <li>
                        <a href="/">Average rating</a>
                      </li>
                      <li>
                        <a href="/">Newness</a>
                      </li>

                      <li>
                        <a href="/">Price: low to high</a>
                      </li>
                      <li>
                        <a href="/">Price: high to low</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="PriceItems">
                  <h6>PRICE RANGE</h6>
                  <div className="ListPriceItems">
                    <ul>
                      <li>
                        <a href="/">All</a>
                      </li>
                      <li>
                        <a href="/">$0-$10</a>
                      </li>

                      <li>
                        <a href="/">$10-$20</a>
                      </li>
                      <li>
                        <a href="/">$20-$30</a>
                      </li>

                      <li>
                        <a href="/">$30-$40</a>
                      </li>
                      <li>
                        <a href="/">40$+</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isProducts && <ProductShowcase products={products} />}

      {isHomeDecorSent && <ProductShowcase products={HomeDecor} />}
      {isLightingSent && <ProductShowcase products={Lighting} />}

      {isDecorationSent && <ProductShowcase products={Decoration} />}
      {isVasesSent && <ProductShowcase products={Vases} />}
      {isBasicsSent && <ProductShowcase products={Basics} />}
    </div>
  );
};

export default CategoryFilter;
