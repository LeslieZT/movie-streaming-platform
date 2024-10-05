import { CastMember } from "./CastMember";
import { Genre, MovieGenreAPI } from "./Genre.type";

export interface MovieAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  releaseDate: string;
  title: string;
  posterPath: string;
  voteAverage: number;
  originalLanguage: string;
}

export interface MovieWithGenres extends Movie {
  genres: Genre[];
}

export interface NowPlayingMovie extends MovieWithGenres {
  overview: string;
}

// --------------------------------

interface ProductionCompanyAPI {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountryAPI {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguageAPI {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailAPI {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: unknown | null;
  budget: number;
  genres: MovieGenreAPI[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanyAPI[];
  production_countries: ProductionCountryAPI[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguageAPI[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  genres: Genre[];
  posterPath: string;
  voteAverage: number;
  overview: string;
  runtime: number;
  releaseDate: string;
  productionCompanies: ProductionCompanyAPI[];
  productionCountries: ProductionCountryAPI[];
  originCountry: string[];
  cast: CastMember[];
}
