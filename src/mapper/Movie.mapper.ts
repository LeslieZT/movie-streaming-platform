import { DEFAULT_POSTER, IMAGE_API_URL } from "../constants/constants";
import { MovieGenres } from "../types/Genre.type";
import { Movie, MovieAPI, MovieWithGenres, NowPlayingMovie } from "../types/Movie.type";
import { setMovieGenres } from "../utils/UtilGenres";

export const mapMovies = (data: MovieAPI[]): Movie[] => {
  const result = data.map((movie: MovieAPI) => {
    const item: Movie = {
      id: movie.id,
      releaseDate: movie.release_date,
      title: movie.title,
      posterPath: movie.poster_path ? `${IMAGE_API_URL}${movie.poster_path}` : DEFAULT_POSTER,
      voteAverage: movie.vote_average,
      originalLanguage: movie.original_language,
      backdropPath: `${IMAGE_API_URL}${movie.backdrop_path}`,
    };
    return item;
  });
  return result;
};

export const mapMoviesWithGenres = (data: MovieAPI[], movieGenres: MovieGenres): MovieWithGenres[] => {
  const result = data.map((movie: MovieAPI) => {
    const item: MovieWithGenres = {
      id: movie.id,
      releaseDate: movie.release_date,
      title: movie.title,
      posterPath: movie.poster_path ? `${IMAGE_API_URL}${movie.poster_path}` : DEFAULT_POSTER,
      voteAverage: movie.vote_average,
      originalLanguage: movie.original_language,
      genres: setMovieGenres(movie.genre_ids, movieGenres),
      backdropPath: `${IMAGE_API_URL}${movie.backdrop_path}`,
    };
    return item;
  });
  return result;
};

export const mapNowPlayingMovies = (data: MovieAPI[], movieGenres: MovieGenres): NowPlayingMovie[] => {
  const result = data.map((movie: MovieAPI) => {
    const item: NowPlayingMovie = {
      id: movie.id,
      releaseDate: movie.release_date,
      title: movie.title,
      posterPath: movie.poster_path ? `${IMAGE_API_URL}${movie.poster_path}` : DEFAULT_POSTER,
      voteAverage: movie.vote_average,
      originalLanguage: movie.original_language,
      genres: setMovieGenres(movie.genre_ids, movieGenres),
      backdropPath: `${IMAGE_API_URL}${movie.backdrop_path}`,
      overview: movie.overview,
    };
    return item;
  });
  return result;
};
