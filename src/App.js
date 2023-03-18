import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Navigation from "./components/nav/Navbar";
import Aboutpage from "./components/pages/about/Aboutpage";
import Contactpage from "./components/pages/contact/Contactpage";
import Homepage from "./components/pages/home/Homepage";
import Productpage from "./components/pages/product/Productpage";
import Testimonials from "./components/pages/testimonial/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage/>} />
          <Route path="/about" element={<Aboutpage/>} />
          <Route path="/testimonials" element={<Testimonials/>} />

          <Route path="/contact" element={<Contactpage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
