import { useEffect, useState } from "react";
import { MovieGenres } from "../../types/Genre.type";
import { getMovieGenres } from "../../services/genre.service";

export const useMovieGenres = () => {
  const [results, setResults] = useState<MovieGenres>({});

  useEffect(() => {
    const loadMovieGenresData = async () => {
      try {
        const response = await getMovieGenres();
        setResults(response);
      } catch (error) {
        console.error("Error cargando los datos maestros:", error);
      }
    };

    loadMovieGenresData();
  }, []);

  return { results };
};
