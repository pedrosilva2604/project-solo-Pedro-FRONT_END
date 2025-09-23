import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Verificacao from "./pages/Verificacao/Verificacao.jsx";     
import Historico from "./pages/Historico/Historico.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/verificacao" replace />} />
        <Route path="/verificacao" element={<Verificacao />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </>
  );
}
