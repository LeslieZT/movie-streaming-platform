import { CastMemberAPI } from "../types/CastMember";
import { MovieAPI, MovieDetailAPI } from "../types/Movie.type";
import { ReviewAPI } from "../types/Review.type";
import { get } from "../utils/AxiosClient";

interface ResponseListMovieAPI {
  results: MovieAPI[];
}

interface ResponseCastAPI {
  id: string;
  cast: CastMemberAPI[];
}

interface ResponseReviewAPI {
  results: ReviewAPI[];
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
    throw new Error(`Error - /trending/movie/day ${error.message}`);
  }
};

export const getNowPlayingMovies = async (options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListMovieAPI>("/movie/now_playing", { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /movie/now_playing ${error.message}`);
  }
};

export const getMovieDetail = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<MovieDetailAPI>(`/movie/${id}`, { ...options });
    return data;
  } catch (error) {
    throw new Error(`Error - /movie/${id} ${error.message}`);
  }
};

export const getMovieCast = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseCastAPI>(`/movie/${id}/credits?language=en-US`, { ...options });
    return data;
  } catch (error) {
    throw new Error(`Error - /movie/${id}/credits ${error.message}`);
  }
};

export const getSimilarMovies = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListMovieAPI>(`/movie/${id}/recommendations?language=en-US`, { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /movie/${id}/recommendations ${error.message}`);
  }
};

export const getMovieComents = async (id: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseReviewAPI>(`/movie/${id}/reviews?language=en-US`, { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /movie/${id}/reviews ${error.message}`);
  }
};

export const searchMovies = async (query: string, options?: Record<string, unknown>) => {
  try {
    const data = await get<ResponseListMovieAPI>(`/search/movie?query=${query}&language=en-US`, { ...options });
    return data.results;
  } catch (error) {
    throw new Error(`Error - /search/movie ${error.message}`);
  }
};
