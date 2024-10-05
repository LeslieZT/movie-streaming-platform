import { MovieCard } from "../Card/MovieCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { QuarterGrid } from "../Section/QuarterGrid";
import { useReleasedMovies } from "../../hooks/home/useReleasedMovies";

export const ReleasedMovies = () => {
  const { results: movies } = useReleasedMovies();

  return (
    <section>
      <div className="header-recommended flex justify-between mb-8 text-white ">
        <h2 className="text-xl font-bold ">New Released - Movies </h2>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <QuarterGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </QuarterGrid>
    </section>
  );
};
