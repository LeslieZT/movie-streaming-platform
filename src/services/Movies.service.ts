import { MovieAPI } from "../types/Movie.type";
import { get } from "../utils/AxiosClient";

interface ResponseListMovieAPI {
  results: MovieAPI[];
}

export const getReleasedMovies = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListMovieAPI>("/movie/upcoming", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /movie/upcoming ${error.message}`);
  }
};

export const getRecommendedMovies = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListMovieAPI>("/movie/popular", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /movie/popular ${error.message}`);
  }
};

export const getTrendingMovies = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListMovieAPI>("/trending/movie/day", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /movie/popular ${error.message}`);
  }
};
