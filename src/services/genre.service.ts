import { MovieGenreAPI, SerieGenreAPI } from "../types/Genre.type";
import { API_CLIENT } from "../utils/AxiosClient";

export const getMovieGenres = async (options?: Record<string, unknown>): Promise<MovieGenreAPI[]> => {
  try {
    const { data } = await API_CLIENT.get("/genre/movie/list", { ...options });
    const result = data.genres as MovieGenreAPI[];
    return result;
  } catch (error) {
    throw new Error(`Error - Get Movie Genres ${error.message}`);
  }
};

export const getSerieGenres = async (options?: Record<string, unknown>): Promise<MovieGenreAPI[]> => {
  try {
    const { data } = await API_CLIENT.get("/genre/tv/list", { ...options });
    const result = data.genres as SerieGenreAPI[];
    return result;
  } catch (error) {
    throw new Error(`Error - Get Movie Genres ${error.message}`);
  }
};
