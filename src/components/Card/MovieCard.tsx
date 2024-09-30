import { Movie } from "../../types/Movie.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../services/image.service";

export const MovieCard = ({ data }: { data: Movie }) => {
  const imgUrl = getImageUrl(data.poster_path);
  return (
    <Link to={`movies/${data.id}`} className="">
      <div className="flex flex-col">
        <img src={imgUrl} alt={data.title} className="w-full h-[344px] mb-4 rounded-md" />
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-white text-left text-xs font-bold">{data.title}</h2>
          <div className="flex gap-1">
            <p className="bg-red-600 text-white text-xs p-2 rounded-md">HD</p>
            <div className="flex items-center gap-2 p-2 text-white text-xs border-solid border-[1px] border-red-600 rounded-md">
              <FontAwesomeIcon icon={faClockFour} />
              <span>3:12:00</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
