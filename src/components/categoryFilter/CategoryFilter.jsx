import React, { useState } from "react";
import "../categoryFilter/categoryFilter.css";
import ProductShowcase from "../productShowcase/ProductShowcase.jsx";

const CategoryFilter = ({ products }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("Default"); // State for sorting
  const [activePriceRange, setActivePriceRange] = useState("All"); // State for price range

  // Function to filter products by price range
  const filterByPriceRange = (products) => {
    if (activePriceRange === "All") return products; // No price range filter
    if (activePriceRange === "$0-$10")
      return products.filter(
        (product) => product.price >= 0 && product.price <= 10
      );
    if (activePriceRange === "$10-$20")
      return products.filter(
        (product) => product.price >= 10 && product.price <= 20
      );
    if (activePriceRange === "$20-$30")
      return products.filter(
        (product) => product.price >= 20 && product.price <= 30
      );
    if (activePriceRange === "$30-$40")
      return products.filter(
        (product) => product.price >= 30 && product.price <= 40
      );
    if (activePriceRange === "$40+")
      return products.filter((product) => product.price > 40);

    return products; // Return unfiltered products if no price range is selected
  };
  // Function to sort the products based on activeSort
  const sortProducts = (products) => {
    let sortedProducts = [...products]; // Copy the product list
    let dupSortedProducts = [...products];
    // Handle sorting logic based on activeSort value
    if (activeSort === "Default") {
      return dupSortedProducts; // Return in the default order (as passed)
    } else if (activeSort === "Popularity") {
      sortedProducts.sort((a, b) => b.popularity - a.popularity);
    } else if (activeSort === "Average rating") {
      sortedProducts.sort(
        (a, b) =>
          (parseFloat(b.averageRating) || 0) -
          (parseFloat(a.averageRating) || 0)
      );
    } else if (activeSort === "Newness") {
      sortedProducts.sort((a, b) => new Date(b.newness) - new Date(a.newness));
    } else if (activeSort === "Price: low to high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (activeSort === "Price: high to low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  // Apply sorting and filtering
  const applySortAndFilter = (products) => {
    // Start by sorting the full product list
    let sortedProducts = sortProducts(products);

    // Apply category filter (if any)
    if (activeFilter !== "ALL") {
      sortedProducts = sortedProducts.filter(
        (product) => product.category === activeFilter
      );
    }

    // Apply price range filter
    return filterByPriceRange(sortedProducts);
  };

  // Final products to display
  const filteredProducts = applySortAndFilter(products);

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
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSort("Default");
                          }}
                        >
                          Default
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSort("Popularity");
                          }}
                        >
                          Popularity
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSort("Average rating");
                          }}
                        >
                          Average rating
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSort("Newness");
                          }}
                        >
                          Newness
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSort("Price: low to high");
                          }}
                        >
                          Price: low to high
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSort("Price: high to low");
                          }}
                        >
                          Price: high to low
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="PriceItems">
                  <h6>PRICE RANGE</h6>
                  <div className="ListPriceItems">
                    <ul>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActivePriceRange("All");
                          }}
                        >
                          All
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActivePriceRange("$0-$10");
                          }}
                        >
                          $0-$10
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActivePriceRange("$10-$20");
                          }}
                        >
                          $10-$20
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActivePriceRange("$20-$30");
                          }}
                        >
                          $20-$30
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActivePriceRange("$30-$40");
                          }}
                        >
                          $30-$40
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setActivePriceRange("$40+");
                          }}
                        >
                          40$+
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="category-wrapper">
        <div className="category-toggle" onClick={toggleCategory}>
          <p>CATEGORIES</p>{" "}
          <i className={`dropdown-arrow ${categoryOpen ? "open" : ""}`}></i>
        </div>
        <div
          className={`category-list-container ${categoryOpen ? "open" : ""}`}
        >
          <ul className="category-list">
            <li
              className={`category-item ${
                activeFilter === "ALL" ? "active-category" : ""
              }`}
              onClick={() => setActiveFilter("ALL")}
            >
              ALL
            </li>
            <li
              className={`category-item ${
                activeFilter === "HomeDecor" ? "active-category" : ""
              }`}
              onClick={() => setActiveFilter("HomeDecor")}
            >
              HOME DECOR
            </li>
            <li
              className={`category-item ${
                activeFilter === "Lighting" ? "active-category" : ""
              }`}
              onClick={() => setActiveFilter("Lighting")}
            >
              LIGHTING
            </li>
            <li
              className={`category-item ${
                activeFilter === "Decoration" ? "active-category" : ""
              }`}
              onClick={() => setActiveFilter("Decoration")}
            >
              DECORATION
            </li>
            <li
              className={`category-item ${
                activeFilter === "Vases" ? "active-category" : ""
              }`}
              onClick={() => setActiveFilter("Vases")}
            >
              VASES
            </li>
            <li
              className={`category-item ${
                activeFilter === "Basics" ? "active-category" : ""
              }`}
              onClick={() => setActiveFilter("Basics")}
            >
              BASICS
            </li>
          </ul>
        </div>
      </div>

      <ProductShowcase products={filteredProducts} />
    </div>
  );
};

export default CategoryFilter;
