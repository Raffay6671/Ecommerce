import { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import MainBanner from "./components/mainBanner/MainBanner.jsx";
import CategoryFilter from "./components/categoryFilter/CategoryFilter.jsx";
import ProductShowcase from "./components/productShowcase/ProductShowcase.jsx";
import FooterComponent from "./components/footerComponent/FooterComponent.jsx";
import SidePanel from "./components/sidePanel/SidePanel.jsx";
import ThemeDropdown from "./components/themeDropdown/ThemeDropdown.jsx";
import CartSidePanel from "./components/cartSidePanel/CartSidePanel.jsx";

function App() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <CategoryFilter />
      <ProductShowcase />
      <FooterComponent />
      <ThemeDropdown />
      <CartSidePanel />
    </>
  );
}

export default App;
