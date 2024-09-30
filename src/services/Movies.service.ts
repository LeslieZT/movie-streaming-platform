import { Movie } from "../types/Movie.type";
import { API_KEY, BASE_URL } from "../constants/constants";

interface ResponseListMovieAPI {
  results: Movie[];
}

export const getReleasedMovies = async (): Promise<ResponseListMovieAPI> => {
  const URL = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

export const getRecommendedMovies = async (): Promise<ResponseListMovieAPI> => {
  const URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};
