import { useEffect, useState } from "react";
import { MovieAPI, TrendingMovie } from "../types/Movie.type";
import { getTrendingMovies } from "../services/Movies.service";
import { IMAGE_API_URL } from "../constants/constants";
import { MovieGenres } from "../types/Genre.type";

export const useTrendingMovies = (movieGenres: MovieGenres) => {
  const [results, setResults] = useState<TrendingMovie[]>([]);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const response = await getTrendingMovies();
        const first3Elements = response.slice(0, 3);
        const data: TrendingMovie[] = first3Elements.map((movie: MovieAPI) => {
          return {
            id: movie.id,
            releaseDate: movie.release_date,
            title: movie.title,
            posterPath: `${IMAGE_API_URL}${movie.poster_path}`,
            backdroPath: `${IMAGE_API_URL}${movie.backdrop_path}`,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
            popularity: movie.popularity,
            originalLanguage: movie.original_language,
            genres: movie.genre_ids.map((ele) => movieGenres[ele]),
          };
        });

        setResults(data);
      } catch (error) {
        console.error("Error cargando los datos maestros:", error);
      }
    };

    loadMovieData();
  }, []);

  return { results };
};
