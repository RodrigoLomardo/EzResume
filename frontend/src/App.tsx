// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        
      </Route>

      {/* Rotas que não precisam da Navbar */}
      
    </Routes>
  );
}
