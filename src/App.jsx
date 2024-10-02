import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Events from "./pages/Events"; // Assuming you have an Events page component
import About from "./pages/About";   // Assuming you have an About page component
import ContactUs from "./pages/ContactUs"; // Assuming you have a Contact Us page component

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        {/* Define your routes here */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <Banner />
              </>
            }
          />
          {/* Events Route */}
          <Route path="/events" element={<Events />} />
          {/* About Route */}
          <Route path="/about" element={<About />} />
          {/* Contact Us Route */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
