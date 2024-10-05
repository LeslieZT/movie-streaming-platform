import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useMovieDetail } from "../../hooks/DetailMovie/useMovieDetail";
import { formatRuntime } from "../../utils/formatRuntime";

export const DetailMovie = () => {
  const { results: data, loading, errors } = useMovieDetail();

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error: {errors}</div>;
  }

  return (
    <div className="text-white p-4 md:p-8">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="flex:1 md:w-1/3 ">
            <img
              src={data.posterPath}
              alt="Silo movie poster"
              className="w-full min-w-[16rem] md:h-full min-h-[500px] h-[500px] rounded-lg shadow-lg"
            />
          </div>

          <div className="flex:1 md:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <button className="bg-red-600 text-white px-4 py-3 rounded-md text-sm font-semibold">
                + Add to Favorite
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 mt-16 mb-8">
              <div className="flex gap-1">
                {data.genres.map((genre) => (
                  <span key={genre.id} className="bg-white text-black p-2 rounded text-sm font-medium">
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
                  {new Date(data.releaseDate).getFullYear()}
                </span>

                <span className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
                  {formatRuntime(data.runtime)}
                </span>

                <span className="flex items-center">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2 text-yellow-500" />
                  {data.voteAverage.toFixed(1)}
                </span>
              </div>
            </div>

            <p className="mb-4 text-justify">{data.overview}</p>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex gap-2 justify-start">
                <p className="w-1/5 font-semibold text-right">Country:</p>
                <p className="w-4/5 text-justify">
                  {data.productionCountries.map((country) => country.name).join(", ")}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Genre:</p>
                <p className="w-4/5 text-justify">{data.genres.map((genre) => genre.name).join(", ")}</p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Date Release:</p>
                <p className="w-4/5 text-justify">{data.releaseDate}</p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Production:</p>
                <p className="w-4/5 text-justify">
                  {data.productionCompanies.map((company) => company.name).join(", ")}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Cast:</p>
                <p className="w-4/5 text-justify">{data.cast.map((member) => member.name).join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
