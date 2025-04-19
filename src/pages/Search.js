import { useState } from "react";
import { searchMovies } from "../services/api_service";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await searchMovies(query);
    setResults(res);
  };

  return (
    <div>
      <h1>Buscar películas</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Escribe el título..."
        />
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}