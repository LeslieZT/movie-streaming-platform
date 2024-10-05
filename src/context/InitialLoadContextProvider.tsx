import { useMovieGenres } from "../hooks/useMovieGenres";
import { useSerieGenres } from "../hooks/useSerieGenres";
import { InitialLoadContext } from "./InitialLoadContext";

export const InitialLoadContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { results: movieGenres } = useMovieGenres();
  const { results: serieGenres } = useSerieGenres();

  const contextValue = {
    movieGenres,
    serieGenres,
  };

  return <InitialLoadContext.Provider value={contextValue}>{children}</InitialLoadContext.Provider>;
};
