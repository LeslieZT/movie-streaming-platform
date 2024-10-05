import { useEffect, useState } from "react";
import { getMovieComents } from "../../services/Movies.service";
import { useParams } from "react-router-dom";
import { Review } from "../../types/Review.type";
import { mapComments } from "../../mapper/Comment.mapper";

export const useMovieComments = () => {
  const { idMovie } = useParams<{ idMovie: string }>();
  const [results, setResults] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();

  useEffect(() => {
    const loadMovieData = async (id: string) => {
      try {
        setLoading(true);
        const response = await getMovieComents(id);
        const first10Elements = response.slice(0, 10);
        const data: Review[] = mapComments(first10Elements);
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
