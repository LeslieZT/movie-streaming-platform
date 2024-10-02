import { useEffect, useState } from "react";
import { Movie } from "../types/Movie.type";
import { getReleasedMovies } from "../services/Movies.service";
import { mapMovies } from "../mapper/Movie.mapper";

export const useReleasedMovies = () => {
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const response = await getReleasedMovies();
        const first4Elements = response.slice(0, 4);
        const data: Movie[] = mapMovies(first4Elements);
        setResults(data);
      } catch (error) {
        console.error("Error Released Movies:", error);
      }
    };
    loadMovieData();
  }, []);

  return { results };
};
