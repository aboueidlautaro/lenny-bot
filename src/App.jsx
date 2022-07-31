import { useState } from "react";
import "./index.css";
import "./assets/static/css/format.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/routes/Home";
import About from "./assets/routes/About";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
