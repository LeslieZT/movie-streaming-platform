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
