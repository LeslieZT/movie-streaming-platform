import { CastMember } from "./CastMember";

export interface SerieAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface Serie {
  id: number;
  firtAirDate: string;
  name: string;
  posterPath: string;
  voteAverage: number;
  originalLanguage: string;
}

export interface RecentlyUpdateSerie extends Serie {
  overview: string;
}

// ------------------------------------------------

interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SeasonAPI {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface SerieDetailAPI {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: null | Episode;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: SeasonAPI[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface Season {
  airDate: string;
  episodeCount: number;
  id: number;
  name: string;
  overview: string;
  posterPath: string;
  seasonNumber: number;
  voteAverage: number;
}

export interface SerieDetail {
  id: number;
  title: string;
  genres: Genre[];
  posterPath: string;
  voteAverage: number;
  overview: string;
  firstAirDate: string;
  numberOfEpisodes: number;
  numberOSeasons: number;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  originCountry: string[];
  cast: CastMember[];
  seasons: Season[];
}
