import { MovieGenres, MovieGenreAPI } from "../types/Genre.type";
import { API_CLIENT } from "../utils/AxiosClient";

export const getMovieGenres = async (options?: Record<string, unknown>) => {
  try {
    const { data } = await API_CLIENT.get("/genre/movie/list", { ...options });
    const result: MovieGenres = {};
    data.genres.forEach((element: MovieGenreAPI) => {
      result[element.id] = element;
    });
    return result;
  } catch (error) {
    throw new Error(`Error - Get Movie Genres ${error.message}`);
  }
};
