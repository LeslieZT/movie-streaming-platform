import { IMAGE_API_URL } from "../constants/constants";
import { Serie, SerieAPI } from "../types/Serie.type";

export const mapSeries = (data: SerieAPI[]): Serie[] => {
  const result = data.map((serie: SerieAPI) => {
    const item: Serie = {
      id: serie.id,
      firtAirDate: serie.first_air_date,
      name: serie.name,
      posterPath: `${IMAGE_API_URL}${serie.poster_path}`,
      voteAverage: serie.vote_average,
      originalLanguage: serie.original_language,
    };
    return item;
  });
  return result;
};
