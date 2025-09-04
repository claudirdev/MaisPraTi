/*------------------------------------------------------------------ 
File: src/components/MovieCard.jsx
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                    
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-card">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"} alt={movie.Title} />
      <h3>{movie.Title} ({movie.Year})</h3>
      <Link to={`/details/${movie.imdbID}`}>Ver Detalhes</Link>
      {isFavorite ? (
        <button onClick={() => removeFavorite(movie.imdbID)}>Remover Favorito</button>
      ) : (
        <button onClick={() => addFavorite(movie)}>Adicionar Favorito</button>
      )}
    </div>
  );
}
