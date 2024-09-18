import { useEffect, useState } from "react";
import { Movie } from "./Movie.type";
import { MovieCard } from "./MovieCard";
import { getReleasedMovies } from "./Movies.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ReleasedMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getReleasedMovies();
      const first4Elements = moviesData.results.slice(0, 4);
      setMovies(first4Elements);
    };
    fetchMovies();
  }, []);

  return (
    <section>
      <div className="header-recommended flex justify-between mb-8 text-white ">
        <h2 className="text-xl font-bold ">New Released - Movies </h2>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-16">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </section>
  );
};
