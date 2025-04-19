import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../services/api_service";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Calificación: {movie.vote_average}</p>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}