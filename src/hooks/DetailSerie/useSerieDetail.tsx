import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SeasonAPI, SerieDetail, SerieDetailAPI } from "../../types/Serie.type";
import { IMAGE_API_URL } from "../../constants/constants";
import { CastMemberAPI } from "../../types/CastMember";
import { getSerieCast, getSerieDetail } from "../../services/Serie.service";

export const useSerieDetail = () => {
  const { idSerie } = useParams<{ idSerie: string }>();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();
  const [results, setResults] = useState<SerieDetail>();

  useEffect(() => {
    const loadserieData = async (id: string) => {
      try {
        setLoading(true);
        const serie: SerieDetailAPI = await getSerieDetail(id);
        const castMembers = await getSerieCast(id);
        const response: SerieDetail = {
          id: serie.id,
          firstAirDate: serie.first_air_date,
          title: serie.name,
          posterPath: `${IMAGE_API_URL}${serie.poster_path}`,
          voteAverage: serie.vote_average,
          genres: serie.genres,
          overview: serie.overview,
          numberOfEpisodes: serie.number_of_episodes,
          numberOSeasons: serie.number_of_seasons,
          productionCompanies: serie.production_companies,
          originCountry: serie.origin_country,
          productionCountries: serie.production_countries,
          cast: castMembers.cast
            .filter((member: CastMemberAPI) => member.known_for_department === "Acting" && member.order < 4)
            .map((member) => ({ name: member.name })),
          seasons: serie.seasons.map((season: SeasonAPI) => {
            return {
              airDate: season.air_date,
              episodeCount: season.episode_count,
              id: season.id,
              name: season.name,
              overview: season.overview,
              posterPath: `${IMAGE_API_URL}${season.poster_path}`,
              seasonNumber: season.season_number,
              voteAverage: season.vote_average,
            };
          }),
        };

        setResults(response);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (idSerie) {
      loadserieData(idSerie);
    }
  }, [idSerie]);

  return { results, errors, loading };
};
