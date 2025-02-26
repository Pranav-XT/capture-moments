import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Service from "./pages/Service";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Blog from "./pages/Blog";
import EnquiryPage from "./pages/Enquiry";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import Testimonials from "./pages/Testimonials";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import "./styles/styles.css";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Simulated page load delay
  }, [location]);  // Runs when route changes
  if(loading){
    return <Loader />
}
  return (
    <CartProvider>

      <Cursor /> {/* Add Cursor */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Service />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
