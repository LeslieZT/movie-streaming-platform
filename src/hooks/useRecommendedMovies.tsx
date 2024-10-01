import { useEffect, useState } from "react";
import { Movie, MovieAPI } from "../types/Movie.type";
import { getRecommendedMovies } from "../services/Movies.service";
import { IMAGE_API_URL } from "../constants/constants";

export const useRecommendedMovies = () => {
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const response = await getRecommendedMovies();
        const data: Movie[] = response.map((movie: MovieAPI) => {
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
