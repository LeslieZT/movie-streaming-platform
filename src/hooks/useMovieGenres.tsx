import { useEffect, useState } from "react";
import { MovieGenreAPI, MovieGenres } from "../types/Genre.type";
import { getMovieGenres } from "../services/genre.service";

export const useMovieGenres = () => {
  const [results, setResults] = useState<MovieGenres>({});

  useEffect(() => {
    const loadMovieGenresData = async () => {
      try {
        const response = await getMovieGenres();
        const result: MovieGenres = {};
        response.forEach((element: MovieGenreAPI) => {
          result[element.id] = element;
        });
        setResults(result);
      } catch (error) {
        console.error("Error MovieGenres", error);
      }
    };
    loadMovieGenresData();
  }, []);

  return { results };
};
