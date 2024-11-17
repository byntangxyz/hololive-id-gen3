import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Zeta from "./pages/Zeta";
import Kobo from "./pages/Kobo";
import Kaela from "./pages/Kaela";
import NotFound from "./pages/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zeta" element={<Zeta />} />
        <Route path="/kobo" element={<Kobo />} />
        <Route path="/kaela" element={<Kaela />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
