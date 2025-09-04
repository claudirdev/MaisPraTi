/*------------------------------------------------------------------ 
File: src/pages/Home.jsx
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { useState, useEffect } from "react";
import { fetchMovies } from "../api/omdb.js";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Pagination from "../components/Pagination.jsx";
import Loader from "../components/Loader.jsx";

export default function Home() {
  const [query, setQuery] = useState(""); // começa vazio
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchMovies = async (searchQuery, page = 1) => {
    if (!searchQuery.trim()) return; // não busca se vazio
    try {
      setLoading(true);
      setError("");
      setMovies([]); // limpa resultados antigos
      const data = await fetchMovies(searchQuery, page);
      setMovies(data.Search || []);
      setTotalResults(parseInt(data.totalResults) || 0);
    } catch (err) {
      let msg = err.message;
      // Tradução simples das mensagens do OMDb
      if (msg === "Movie not found!") msg = "Filme não encontrado.";
      else if (msg === "Too many results.") msg = "Muitos resultados. Seja mais específico.";
      else if (msg === "Invalid API key!") msg = "Chave da API inválida.";
      else msg = "Ocorreu um erro ao buscar os filmes.";

      setError(msg);
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      searchMovies(query, currentPage);
    }
  }, [query, currentPage]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setCurrentPage(1); // reseta página
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && movies.length === 0 && query.trim() === "" && (
        <p>Digite o nome de um filme para começar a busca.</p>
      )}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {totalResults > 10 && (
        <Pagination
          currentPage={currentPage}
          totalResults={totalResults}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
