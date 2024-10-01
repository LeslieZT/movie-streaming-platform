import { TrendingMovie } from "../../types/Movie.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";

export const TrendingCard = ({ data }: { data: TrendingMovie }) => {
  return (
    <div className="rounded-xl shadow-xl">
      <div className="relative">
        <img src={data.posterPath} alt={data.title} className="w-full h-[300px] rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-2 w-full p-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-white">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-1" />
              <h3 className="">{"3:12:00"}</h3>
            </div>
            <div className="flex items-center gap-1 ">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 ml-2 mr-1 text-yellow-500" />
              <h3 className="text-white">{data.voteAverage.toFixed(1)}</h3>
            </div>
          </div>
        </div>

        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ">
          <FontAwesomeIcon icon={faPlayCircle} className="w-full h-full text-white" />
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-white text-lg font-bold ">{data.title}</h3>
        <div className="flex space-x-1">
          {data.genres.map((genre) => (
            <div key={genre.id} className="bg-red-600  p-2 rounded-md text-xs">
              <h3 className="text-white">{genre.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
