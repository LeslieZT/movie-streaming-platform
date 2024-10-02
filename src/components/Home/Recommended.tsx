import { MovieCard } from "../Card/MovieCard";
import { Movie } from "../../types/Movie.type";
import { Serie } from "../../types/Serie.type";
import { SerieCard } from "../Card/SerieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { QuarterGrid } from "../Section/QuarterGrid";
import { Category, useRecommended } from "../../hooks/userRecommended";

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
  const { result: data, activeCategory, setActiveCategory } = useRecommended();

  const categories: Category[] = ["Movies", "Series", "Animation"];

  const handleCategoryClick = (type: Category) => {
    setActiveCategory(type);
  };

  return (
    <section className="text-white">
      <div className="header-recommended flex justify-between mb-8">
        <div className="flex gap-12">
          <h3 className="text-xl font-bold">Recommended</h3>
          <div className="buttons-filter flex gap-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center text-xl opacity-50 font-bold">
          <h2>View all</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <QuarterGrid>
        {(() => {
          switch (activeCategory) {
            case "Movies":
              return <MoviesList movies={data as Movie[]} />;
            case "Series":
              return <SeriesList series={data as Serie[]} />;
            default:
              return <MoviesList movies={data as Movie[]} />;
          }
        })()}
      </QuarterGrid>
    </section>
  );
};
