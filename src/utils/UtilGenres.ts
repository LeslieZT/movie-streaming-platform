import { MovieGenres } from "../types/Genre.type";

export const setMovieGenres = (ids: number[], movieGenres: MovieGenres) => {
  if (Object.keys(movieGenres).length === 0) return [];
  return ids.map((id) => movieGenres[id]);
};
