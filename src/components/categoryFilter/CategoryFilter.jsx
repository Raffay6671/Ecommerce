import React from "react";
import "../categoryFilter/categoryFilter.css";

const CategoryFilter = () => {
  return (
    <div className="category-filter-container">
      <div className="filter-options">
        <ul className="filter-list">
          <li className="filter-item active">ALL</li>
          <li className="filter-item">HOME DECOR</li>
          <li className="filter-item">LIGHTING</li>
          <li className="filter-item">DECORATION</li>
          <li className="filter-item">VASES</li>
          <li className="filter-item">BASICS</li>
        </ul>
        <div className="filter-action">
          FILTER <i className="fa fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
