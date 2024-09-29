import { Serie } from "../types/Serie.type";
import { API_KEY, BASE_URL } from "../constants/constants";

interface ResponseListMovieAPI {
  results: Serie[];
}

export const getReleasedSeries = async (): Promise<ResponseListMovieAPI> => {
  const URL = `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`;
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

export const getRecommendedSeries = async (): Promise<ResponseListMovieAPI> => {
  const URL = `${BASE_URL}/tv/popular?api_key=${API_KEY}`;
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

export const getImageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};
