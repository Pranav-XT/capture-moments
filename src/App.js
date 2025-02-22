import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import Service from "./pages/Service";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Will be Added Soon!

// import Help from "./pages/Help";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Terms from "./pages/Terms";
// import Feedback from "./pages/Feedback";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<Service />} /> 
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
