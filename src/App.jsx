import { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import MainBanner from "./components/mainBanner/MainBanner.jsx";
import CategoryFilter from "./components/categoryFilter/CategoryFilter.jsx";
import ProductShowcase from "./components/productShowcase/ProductShowcase.jsx";

function App() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <CategoryFilter />
      <ProductShowcase />
    </>
  );
}

export default App;
