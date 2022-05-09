import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Result from "../pages/Result";
import Favorites from "../pages/Favorites";

const Navigate = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Navigate;