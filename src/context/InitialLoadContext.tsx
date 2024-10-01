import { createContext } from "react";
import { MovieGenres } from "../types/Genre.type";

export interface InitialLoadContextParams {
  movieGenres: MovieGenres;
}

const initialState: InitialLoadContextParams = {
  movieGenres: {},
};

export const InitialLoadContext = createContext<InitialLoadContextParams>(initialState);
