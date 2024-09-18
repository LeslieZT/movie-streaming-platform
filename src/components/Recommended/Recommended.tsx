import { useEffect, useState } from "react";
import { MovieCard } from "../Movie/MovieCard";
import { Movie } from "../Movie/Movie.type";
import { Serie } from "../Series/Serie.type";
import { SerieCard } from "../Series/SerieCard";
import { getRecommendedMovies } from "../Movie/Movies.service";
import { getRecommendedSeries } from "../Series/Serie.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="contente-recommended flex flex-wrap justify-between gap-10">
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
      </div>
    </section>
  );
};
