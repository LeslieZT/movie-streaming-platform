import { useEffect, useState } from "react";
import { SerieAPI, Serie } from "../types/Serie.type";

import { IMAGE_API_URL } from "../constants/constants";
import { getReleasedSeries } from "../services/Serie.service";

export const useReleasedSeries = () => {
  const [results, setResults] = useState<Serie[]>([]);

  useEffect(() => {
    const loadSerieData = async () => {
      try {
        const response = await getReleasedSeries();
        const first4Elements = response.slice(0, 4);
        const data: Serie[] = first4Elements.map((serie: SerieAPI) => {
          return {
            id: serie.id,
            firtAirDate: serie.first_air_date,
            name: serie.name,
            posterPath: `${IMAGE_API_URL}${serie.poster_path}`,
            backdroPath: `${IMAGE_API_URL}${serie.backdrop_path}`,
            voteAverage: serie.vote_average,
            voteCount: serie.vote_count,
            popularity: serie.popularity,
            originalLanguage: serie.original_language,
          };
        });

        setResults(data);
      } catch (error) {
        console.error("Error cargando los datos maestros:", error);
      }
    };

    loadSerieData();
  }, []);

  return { results };
};
