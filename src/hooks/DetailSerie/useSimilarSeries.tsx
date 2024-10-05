import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSimilarSeries } from "../../services/Serie.service";
import { Serie } from "../../types/Serie.type";
import { mapSeries } from "../../mapper/Series.mapper";

export const useSimilarSeries = () => {
  const { idSerie } = useParams<{ idSerie: string }>();
  const [results, setResults] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();

  useEffect(() => {
    const loadSerieData = async (id: string) => {
      try {
        setLoading(true);
        const response = await getSimilarSeries(id);
        const first4Elements = response.slice(0, 8);
        const data: Serie[] = mapSeries(first4Elements);
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
