import { useEffect, useState } from "react";
import { SerieAPI, RecentlyUpdateSerie } from "../types/Serie.type";
import { IMAGE_API_URL } from "../constants/constants";
import { getRecentlyUpdateSeries } from "../services/Serie.service";

export const useRecentlyUpdateSeries = () => {
  const [results, setResults] = useState<RecentlyUpdateSerie[]>([]);

  useEffect(() => {
    const loadSerieData = async () => {
      try {
        const response = await getRecentlyUpdateSeries();
        const data: RecentlyUpdateSerie[] = response.map((serie: SerieAPI) => {
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
            overview: serie.overview,
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
