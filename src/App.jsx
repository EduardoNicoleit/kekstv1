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
import useSticky from './components/hooks/useSticky';

function App() {
  const { isSticky, element } = useSticky()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isSticky={isSticky} element={element} />} />
        <Route index path="/home" element={<Home isSticky={isSticky} element={element} />} />
        <Route path="/expertise" element={<Expertise isSticky={isSticky} element={element} />} />
        <Route path="/product" element={<Product isSticky={isSticky} element={element} />} />
        <Route path="/expertise/datas" element={<ExpertiseData isSticky={isSticky} element={element} />} />
        <Route path="/works" element={<Works isSticky={isSticky} element={element} />} />
        <Route path="/works/bp" element={<Bp isSticky={isSticky} element={element} />} />
        <Route path="/works/bpl" element={<Bpl isSticky={isSticky} element={element} />} />
        <Route path="/works/ceoTracker" element={<CeoTracker isSticky={isSticky} element={element} />} />
        <Route path="/works/copReport" element={<CopReport isSticky={isSticky} element={element} />} />
        <Route path="/works/deutsche" element={<Deutsche isSticky={isSticky} element={element} />} />
        <Route path="/works/dtcp" element={<Dtcp isSticky={isSticky} element={element} />} />
        <Route path="/works/farmerVoice" element={<FarmerVoice isSticky={isSticky} element={element} />} />
        <Route path="/works/maltesert" element={<Malteser isSticky={isSticky} element={element} />} />
        <Route path="/works/mars" element={<Mars isSticky={isSticky} element={element} />} />
        <Route path="/works/netClean" element={<NetClean isSticky={isSticky} element={element} />} />
        <Route path="/works/newwaters" element={<Newwaters isSticky={isSticky} element={element} />} />
        <Route path="/works/uniper" element={<Uniper isSticky={isSticky} element={element} />} />
        <Route path="/works/volkswagen" element={<Volkswagen isSticky={isSticky} element={element} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
