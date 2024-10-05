import { useContext, useEffect, useState } from "react";
import { NowPlayingMovie } from "../../types/Movie.type";
import { getNowPlayingMovies } from "../../services/Movies.service";
import { InitialLoadContext } from "../../context/InitialLoadContext";
import { mapNowPlayingMovies } from "../../mapper/Movie.mapper";

export const useNowPlayingMovies = () => {
  const { movieGenres } = useContext(InitialLoadContext);
  const [results, setResults] = useState<NowPlayingMovie[]>([]);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const response = await getNowPlayingMovies();
        const first8Elements = response.slice(0, 8);
        const data: NowPlayingMovie[] = mapNowPlayingMovies(first8Elements, movieGenres);
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
