/*------------------------------------------------------------------ 
File: src/pages/Favorites.jsx
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                    
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Meus Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Nenhum filme nos favoritos ainda.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
