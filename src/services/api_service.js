const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
  const data = await res.json();
  return data.results;
};

export const getMovieById = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`);
  return await res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`);
  const data = await res.json();
  return data.results;
};