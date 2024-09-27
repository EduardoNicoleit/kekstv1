import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Volkswagen from "./pages/Volkswagen";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className='border-[1px] text-white'>
        <DesktopB />
        {/* <FirstPage /> */}
      </div>
    </div>
  )
}

export default App;
