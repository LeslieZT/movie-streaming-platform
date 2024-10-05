import React from "react";
import { useSearchMovies } from "../../hooks/useSearchMovie";
import { QuarterGrid } from "../Section/QuarterGrid";
import { MovieCard } from "../Card/MovieCard";

interface SearchResultsProps {
  query: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const { results: movies, loading, errors } = useSearchMovies(query);

  if (loading) {
    return <div className="container mx-auto mt-8">Loading...</div>;
  }

  if (errors) {
    return <div className="container mx-auto mt-8">Error: {errors}</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {movies.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <QuarterGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </QuarterGrid>
      )}
    </div>
  );
};

export default SearchResults;
