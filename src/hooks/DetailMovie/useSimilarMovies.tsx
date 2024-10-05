import { useEffect, useState } from "react";
import { Movie } from "../../types/Movie.type";
import { getSimilarMovies } from "../../services/Movies.service";
import { mapMovies } from "../../mapper/Movie.mapper";
import { useParams } from "react-router-dom";

export const useSimilarMovies = () => {
  const { idMovie } = useParams<{ idMovie: string }>();
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();

  useEffect(() => {
    const loadMovieData = async (id: string) => {
      try {
        setLoading(true);
        const response = await getSimilarMovies(id);
        const first4Elements = response.slice(0, 8);
        const data: Movie[] = mapMovies(first4Elements);
        setResults(data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (idMovie) {
      loadMovieData(idMovie);
    }
  }, [idMovie]);

  return { results, errors, loading };
};
