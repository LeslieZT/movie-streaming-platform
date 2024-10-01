export interface MovieGenreAPI {
  id: number;
  name: string;
}
export interface MovieGenre {
  id: number;
  name: string;
}
export interface MovieGenres {
  [key: string]: MovieGenre;
}
