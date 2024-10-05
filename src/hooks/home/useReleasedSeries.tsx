import { useEffect, useState } from "react";
import { Serie } from "../../types/Serie.type";
import { getReleasedSeries } from "../../services/Serie.service";
import { mapSeries } from "../../mapper/Series.mapper";

export const useReleasedSeries = () => {
  const [results, setResults] = useState<Serie[]>([]);

  useEffect(() => {
    const loadSerieData = async () => {
      try {
        const response = await getReleasedSeries();
        const first4Elements = response.slice(0, 4);
        const data: Serie[] = mapSeries(first4Elements);
        setResults(data);
      } catch (error) {
        console.error("Error Released Series:", error);
      }
    };
    loadSerieData();
  }, []);

  return { results };
};
