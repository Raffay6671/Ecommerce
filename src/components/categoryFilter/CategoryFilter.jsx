import React, { useState } from "react";
import "../categoryFilter/categoryFilter.css";
import ProductShowcase from "../productShowcase/ProductShowcase.jsx";

const CategoryFilter = ({ products }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Filter the products based on the active filter
  const filteredProducts =
    activeFilter === "ALL"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="category-filter-container">
      <div className="filter-options">
        <ul className="filter-list">
          <li
            className={`filter-item ${activeFilter === "ALL" ? "active" : ""}`}
            onClick={() => setActiveFilter("ALL")}
          >
            ALL
          </li>

          <li
            className={`filter-item ${
              activeFilter === "HomeDecor" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("HomeDecor")}
          >
            HOME DECOR
          </li>

          <li
            className={`filter-item ${
              activeFilter === "Lighting" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("Lighting")}
          >
            LIGHTING
          </li>

          <li
            className={`filter-item ${
              activeFilter === "Decoration" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("Decoration")}
          >
            DECORATION
          </li>

          <li
            className={`filter-item ${
              activeFilter === "Vases" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("Vases")}
          >
            VASES
          </li>

          <li
            className={`filter-item ${
              activeFilter === "Basics" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("Basics")}
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

      <ProductShowcase products={filteredProducts} />
    </div>
  );
};

export default CategoryFilter;
