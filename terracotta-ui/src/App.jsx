import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Routes>
      {/* Restaurant menu pages with slug */}
      <Route path="/:slug" element={<Home />} />
      <Route path="/:slug/about" element={<About />} />
      
      {/* Redirect root to default restaurant */}
      <Route path="/" element={<Navigate to="/terracotta-bistro" replace />} />
      
      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/terracotta-bistro" replace />} />
    </Routes>
  );
}