import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TrendingCard } from "../Card/TrendingCard";
import { ThirdGrid } from "../Section/ThirdGrid";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import { InitialLoadContext } from "../../context/InitialLoadContext";

export const Trending = () => {
  const { movieGenres } = useContext(InitialLoadContext);

  const { results: movies } = useTrendingMovies(movieGenres);

  return (
    <section>
      <div className="header-recommended flex justify-between mb-8 text-white ">
        <h2 className="text-xl font-bold ">Trending</h2>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <ThirdGrid>
        {movies.map((movie) => (
          <TrendingCard key={movie.id} data={movie} />
        ))}
      </ThirdGrid>
    </section>
  );
};
