import { useContext, useEffect, useState } from "react";
import { MovieWithGenres } from "../../types/Movie.type";
import { getTrendingMovies } from "../../services/Movies.service";
import { InitialLoadContext } from "../../context/InitialLoadContext";
import { mapMoviesWithGenres } from "../../mapper/Movie.mapper";

export const useTrendingMovies = () => {
  const { movieGenres } = useContext(InitialLoadContext);
  const [results, setResults] = useState<MovieWithGenres[]>([]);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const response = await getTrendingMovies();
        const first3Elements = response.slice(0, 3);
        const data: MovieWithGenres[] = mapMoviesWithGenres(first3Elements, movieGenres);
        setResults(data);
      } catch (error) {
        console.error("Error Trending Movies:", error);
      }
    };
    if (Object.keys(movieGenres).length > 0) {
      loadMovieData();
    }
  }, [movieGenres]);

  return { results };
};
