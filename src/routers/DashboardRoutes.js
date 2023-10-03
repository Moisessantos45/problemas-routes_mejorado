import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import DcScreen from "../components/dc/DcScreen";
import { Navbar } from "../components/ui/NavBar";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="/heroe/:heroeId" element={<HeroScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="*" element={<Navigate to="/marvel" />} />
        </Routes>
      
    </>
  );
};

export default DashboardRoutes;


