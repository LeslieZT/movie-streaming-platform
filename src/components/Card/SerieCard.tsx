import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Serie } from "../../types/Serie.type";
import { Link } from "react-router-dom";

export const SerieCard = ({ data }: { data: Serie }) => {
  return (
    <Link to={`/series/${data.id}`} className="">
      <div className="flex flex-col">
        <img src={data.posterPath} alt={data.name} className="w-full h-[344px] mb-4 rounded-md" />
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-white text-left text-xs font-bold">{data.name}</h2>
          <div className="flex gap-1">
            <p className="bg-red-600 text-white text-xs p-2 rounded-md">{data.originalLanguage.toUpperCase()}</p>
            <div className="flex items-center gap-2 p-2 text-white text-xs border-solid border-[1px] border-red-600 rounded-md">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-500" />
              <span className="text-white">{data.voteAverage.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
