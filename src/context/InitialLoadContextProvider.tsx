import { useMovieGenres } from "../hooks/useMovieGenres";
import { InitialLoadContext } from "./InitialLoadContext";

export const InitialLoadContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { results: movieGenres } = useMovieGenres();

  const contextValue = {
    movieGenres,
  };

  return <InitialLoadContext.Provider value={contextValue}>{children}</InitialLoadContext.Provider>;
};
