import { useEffect, useState } from "react";
import { MovieCard } from "../Card/MovieCard";
import { Movie } from "../../types/Movie.type";
import { Serie } from "../../types/Serie.type";
import { SerieCard } from "../Card/SerieCard";
import { getRecommendedMovies } from "../../services/Movies.service";
import { getRecommendedSeries } from "../../services/Serie.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { QuarterGrid } from "../Section/QuarterGrid";

const MoviesList = ({ movies }: { movies: Movie[] }) => (
  <>
    {movies.map((movie) => (
      <MovieCard key={movie.id} data={movie} />
    ))}
  </>
);

const SeriesList = ({ series }: { series: Serie[] }) => (
  <>
    {series.map((serie) => (
      <SerieCard key={serie.id} data={serie} />
    ))}
  </>
);

export const Recommended = () => {
  const [showing, setShowing] = useState("movies");
  const [data, setData] = useState<Movie[] | Serie[]>([]);

  const handleToggle = (type: string) => {
    setShowing(type);
  };

  const fetchMovies = async () => {
    const moviesData = await getRecommendedMovies();
    setData(moviesData.results);
  };

  const fetchSeries = async () => {
    const seriesData = await getRecommendedSeries();
    setData(seriesData.results);
  };

  useEffect(() => {
    if (showing === "movies") {
      fetchMovies();
    } else {
      fetchSeries();
    }
  }, [showing]);

  return (
    <section className="text-white">
      <div className="header-recommended flex justify-between mb-8">
        <div className="flex gap-12">
          <h3 className="text-xl font-bold">Recommended</h3>
          <div className="buttons-filter flex gap-8">
            <button className="" onClick={() => handleToggle("movies")}>
              Movies
            </button>
            <button onClick={() => handleToggle("series")}>Series</button>
          </div>
        </div>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <QuarterGrid>
        {(() => {
          switch (showing) {
            case "movies":
              return <MoviesList movies={data as Movie[]} />;
            case "series":
              return <SeriesList series={data as Serie[]} />;
            default:
              return <MoviesList movies={data as Movie[]} />;
          }
        })()}
      </QuarterGrid>
    </section>
  );
};
