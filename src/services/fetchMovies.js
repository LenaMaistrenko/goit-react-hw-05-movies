import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
const API_KEY = '14e63ba5e86c382d8e1f86b099e90e83';
const language = 'en-US';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&language=${language}`
  );
  return data;
};

export const fetchMoviesBySearch = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=${language}`
  );
  return data.results;
};

export const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=${language}`
  );
  return data;
};

export const fetchMovieCredits = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`
  );
  return data.cast;
};

export const fetchMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}&page=1`
  );
  return data.results;
};
