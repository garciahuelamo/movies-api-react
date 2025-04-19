import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api_service";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Películas populares</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}