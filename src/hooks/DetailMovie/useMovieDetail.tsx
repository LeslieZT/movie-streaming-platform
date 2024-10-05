import { useEffect, useState } from "react";

import { getMovieCast, getMovieDetail } from "../../services/Movies.service";

import { useParams } from "react-router-dom";
import { MovieDetail, MovieDetailAPI } from "../../types/Movie.type";
import { IMAGE_API_URL } from "../../constants/constants";
import { CastMemberAPI } from "../../types/CastMember";

export const useMovieDetail = () => {
  const { idMovie } = useParams<{ idMovie: string }>();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string>();
  const [results, setResults] = useState<MovieDetail>();

  useEffect(() => {
    const loadMovieData = async (id: string) => {
      try {
        setLoading(true);
        const movie: MovieDetailAPI = await getMovieDetail(id);
        const castMembers = await getMovieCast(id);
        const response: MovieDetail = {
          id: movie.id,
          releaseDate: movie.release_date,
          title: movie.title,
          posterPath: `${IMAGE_API_URL}${movie.poster_path}`,
          voteAverage: movie.vote_average,
          genres: movie.genres,
          overview: movie.overview,
          runtime: movie.runtime,
          productionCompanies: movie.production_companies,
          originCountry: movie.origin_country,
          productionCountries: movie.production_countries,
          cast: castMembers.cast
            .filter((member: CastMemberAPI) => member.known_for_department === "Acting" && member.order < 4)
            .map((member) => ({ name: member.name })),
        };

        setResults(response);
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
