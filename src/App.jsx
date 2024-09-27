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
import Search from "./components/search/search.jsx";

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
  const products = [
    {
      id: 1,
      name: "BASKET WITH HANDLES",
      price: 10,
      label: "NEW", // Label remains for visual purposes
      image: "src/assets/images/product1.jpg",
      category: "HomeDecor1",
      popularity: 8,
      averageRating: 4.5,
      priceRange: "$10-$20",
      newness: "2024-09-20", // Date product was added, representing newness
    },

    {
      id: 2,
      name: "FLOWER VASE",
      price: 120,
      label: "NEW",
      image: "src/assets/images/product2.jpg",
      category: "HomeDecor",
      popularity: 8,
      averageRating: 4.2,
      priceRange: "$40+",
      newness: "2024-09-18",
    },
    {
      id: 3,
      name: "DECO ACCESSORY",
      price: 200,
      label: "NEW",
      image: "src/assets/images/product3.jpg",
      category: "Decoration",
      popularity: 12,
      averageRating: 4.7,
      priceRange: "$40+",
      newness: "2024-09-22",
    },
    {
      id: 4,
      name: "WALL CLOCK",
      price: 180,
      label: "NEW",
      image: "src/assets/images/product4.jpg",
      category: "Decoration",
      popularity: 9,
      averageRating: 4.3,
      priceRange: "$40+",
      newness: "2024-09-21",
    },
    {
      id: 5,
      name: "TABLE LAMP",
      price: 90,
      label: "NEW",
      image: "src/assets/images/product5.jpg",
      category: "Lighting",
      popularity: 6,
      averageRating: 4.0,
      priceRange: "$30-$40",
      newness: "2024-09-15",
    },
    {
      id: 6,
      name: "PORTRAY VASE",
      price: 90,
      label: "NEW",
      image: "src/assets/images/product6.jpg",
      category: "Vases",
      popularity: 7,
      averageRating: 4.1,
      priceRange: "$30-$40",
      newness: "2024-09-14",
    },
    {
      id: 7,
      name: "Rose Holdback",
      price: 90,
      label: "NEW",
      image: "src/assets/images/product7.jpg",
      category: "Basics",
      popularity: 5,
      averageRating: 3.9,
      priceRange: "$30-$40",
      newness: "2024-09-13",
    },
  ];

  const location = useLocation();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar products={products} />
              {
                <>
                  <MainBanner />

                  {<CategoryFilter products={products} />}
                  <FooterComponent />
                </>
                /*<ProductShowcase />
              <FooterComponent />
              <ThemeDropdown />
              <CartSidePanel /> */
              }
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
