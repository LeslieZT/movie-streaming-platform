import { Movie } from "../../types/Movie.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { getImageUrl } from "../../services/image.service";

export const TrendingCard = ({ data }: { data: Movie }) => {
  const imgUrl = getImageUrl(data.poster_path);
  return (
    <div className="rounded-xl shadow-xl">
      <div className="relative">
        <img src={imgUrl} alt={data.title} className="w-full h-[300px] rounded-xl" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-2 w-full p-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-white">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-1" />
              <h3 className="">{"3:12:00"}</h3>
            </div>
            <div className="flex items-center gap-1 text-white">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 ml-2 mr-1" />
              <h3 className="">{data.popularity}</h3>
            </div>
          </div>
        </div>

        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ">
          <FontAwesomeIcon icon={faPlayCircle} className="w-full h-full text-white" />
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-white text-lg font-bold ">{data.title}</h3>
        <div className="flex space-x-2">
          {data.genre_ids.map((genre, index) => (
            <div key={index} className="bg-red-600  px-4 py-2 rounded-full text-sm">
              <h3 className="text-white">{genre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
