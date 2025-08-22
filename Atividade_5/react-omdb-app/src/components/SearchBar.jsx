/*------------------------------------------------------------------ 
File: src/components/SearchBar.jsx
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/07/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Buscar filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
