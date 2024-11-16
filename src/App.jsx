import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Komponen untuk halaman utama dan karakter
const Zeta = () => <div>Ini informasi tentang Zeta</div>;
const Kobo = () => <div>Ini informasi tentang Kobo</div>;
const Kaela = () => <div>Ini informasi tentang Kaela</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zeta" element={<Zeta />} />
        <Route path="/kobo" element={<Kobo />} />
        <Route path="/kaela" element={<Kaela />} />
      </Routes>
    </Router>
  );
};

export default App;
