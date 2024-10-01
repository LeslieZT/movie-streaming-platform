import { useEffect, useState } from "react";
import { MovieAPI, Movie } from "../types/Movie.type";
import { getReleasedMovies } from "../services/Movies.service";
import { IMAGE_API_URL } from "../constants/constants";

export const useReleasedMovies = () => {
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovieData = async () => {
      try {
        const response = await getReleasedMovies();
        const first4Elements = response.slice(0, 4);
        const data: Movie[] = first4Elements.map((movie: MovieAPI) => {
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
