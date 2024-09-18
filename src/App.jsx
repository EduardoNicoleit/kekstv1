import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Volkswagen from "./pages/Volkswagen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expertise/volkswagen" element={<Volkswagen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
