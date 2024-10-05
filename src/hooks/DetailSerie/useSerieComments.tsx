import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "../../types/Review.type";
import { mapComments } from "../../mapper/Comment.mapper";
import { getSerieComents } from "../../services/Serie.service";

export const useSerieComments = () => {
  const { idSerie } = useParams<{ idSerie: string }>();
  const [results, setResults] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();

  useEffect(() => {
    const loadSerieData = async (id: string) => {
      try {
        setLoading(true);
        const response = await getSerieComents(id);
        const first10Elements = response.slice(0, 10);
        const data: Review[] = mapComments(first10Elements);
        setResults(data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (idSerie) {
      loadSerieData(idSerie);
    }
  }, [idSerie]);

  return { results, errors, loading };
};
