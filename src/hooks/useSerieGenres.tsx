import { useEffect, useState } from "react";
import { SerieGenreAPI, SerieGenres } from "../types/Genre.type";
import { getSerieGenres } from "../services/genre.service";

export const useSerieGenres = () => {
  const [results, setResults] = useState<SerieGenres>({});

  useEffect(() => {
    const loadSerieGenresData = async () => {
      try {
        const response = await getSerieGenres();
        const result: SerieGenres = {};
        response.forEach((element: SerieGenreAPI) => {
          result[element.id] = element;
        });
        setResults(result);
      } catch (error) {
        console.error("Error SerieGenres", error);
      }
    };
    loadSerieGenresData();
  }, []);

  return { results };
};
