import { MovieGenre } from "./Genre.type";

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
  genres: MovieGenre[];
}

export interface NowPlayingMovie extends MovieWithGenres {
  overview: string;
}

// export interface Movie {
//   id: number;
//   releaseDate: string;
//   title: string;
//   adult: boolean;
//   genres?: string[];
//   posterPath: string;
//   backdroPath: string;
//   voteAverage: number;
//   voteCount: number;
//   popularity: number;
//   video: boolean;
//   originalLanguage: string;
//   originalTitle: string;
//   overview: string;
// }
