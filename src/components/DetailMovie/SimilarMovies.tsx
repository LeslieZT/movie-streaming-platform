import { useSimilarMovies } from "../../hooks/DetailMovie/useSimilarMovies";
import { MovieCard } from "../Card/MovieCard";

import { QuarterGrid } from "../Section/QuarterGrid";

export const SimilarMovies = () => {
  const { results: movies, loading, errors } = useSimilarMovies();

  if (loading || !movies) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error: {errors}</div>;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-12">Similar Movies</h2>
      <QuarterGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} link={`movies/${movie.id}`} />
        ))}
      </QuarterGrid>
    </section>
  );
};
