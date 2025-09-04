/*------------------------------------------------------------------ 
File: src/App.jsx
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Início</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
