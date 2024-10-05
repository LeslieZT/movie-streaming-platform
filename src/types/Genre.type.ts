export interface MovieGenreAPI {
  id: number;
  name: string;
}

export interface SerieGenreAPI {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}
export interface MovieGenres {
  [key: string]: Genre;
}

export interface SerieGenres {
  [key: string]: Genre;
}
