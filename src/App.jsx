import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Expertise,
  Product,
  ExpertiseData,
  Works,
  Bp,
  Bpl,
  CeoTracker,
  CopReport,
  Deutsche,
  Dtcp,
  FarmerVoice,
  Malteser,
  Mars,
  NetClean,
  Newwaters,
  Uniper,
  Volkswagen
} from './pages';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/product" element={<Product />} />
        <Route path="/expertise/datas" element={<ExpertiseData />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/bp" element={<Bp />} />
        <Route path="/works/bpl" element={<Bpl />} />
        <Route path="/works/ceoTracker" element={<CeoTracker />} />
        <Route path="/works/copReport" element={<CopReport />} />
        <Route path="/works/deutsche" element={<Deutsche />} />
        <Route path="/works/dtcp" element={<Dtcp />} />
        <Route path="/works/farmerVoice" element={<FarmerVoice />} />
        <Route path="/works/maltesert" element={<Malteser />} />
        <Route path="/works/mars" element={<Mars />} />
        <Route path="/works/netClean" element={<NetClean />} />
        <Route path="/works/newwaters" element={<Newwaters />} />
        <Route path="/works/uniper" element={<Uniper />} />
        <Route path="/works/volkswagen" element={<Volkswagen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
