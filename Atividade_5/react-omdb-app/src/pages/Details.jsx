/*------------------------------------------------------------------ 
File: src/pages/Details.jsx
Subject: Exercicio 5 - Consumo API com ReactJS - Formação +PraTI                      
Create: 21/08/25                                                   
Developer: Claudir Kraulich
-------------------------------------------------------------------*/
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/omdb";
import Loader from "../components/Loader";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="details">
      {movie && (
        <>
          <h2>{movie.Title} ({movie.Year})</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><b>Diretor:</b> {movie.Director}</p>
          <p><b>Elenco:</b> {movie.Actors}</p>
          <p><b>Gênero:</b> {movie.Genre}</p>
          <p><b>Avaliação:</b> {movie.imdbRating}</p>
          <p><b>Sinopse:</b> {movie.Plot}</p>
        </>
      )}
    </div>
  );
}
