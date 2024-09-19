import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import MainBanner from "./components/mainBanner/MainBanner.jsx";
import CategoryFilter from "./components/categoryFilter/CategoryFilter.jsx";
import ProductShowcase from "./components/productShowcase/ProductShowcase.jsx";
import FooterComponent from "./components/footerComponent/FooterComponent.jsx";
import ThemeDropdown from "./components/themeDropdown/ThemeDropdown.jsx";
import CartSidePanel from "./components/cartSidePanel/CartSidePanel.jsx";
import Cart from "./components/cart/Cart.jsx"; 
import { CartProvider } from "./context/CartContext.jsx"; 

function App() {
  return (
    <Router>
      <CartProvider>
        {" "}
        {/* Wrap your AppContent with CartProvider */}
        <AppContent />
      </CartProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/cart" && <NavBar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <CategoryFilter />
              <ProductShowcase />
              <FooterComponent />
              <ThemeDropdown />
              <CartSidePanel />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
