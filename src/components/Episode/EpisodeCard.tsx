import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Season } from "../../types/Serie.type";
import { faCalendar, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";

export const EpisodeCard = ({ data }: { data: Season }) => {
  console.log(data);
  return (
    <div key={data.id} className="flex items-center gap-4">
      <img src={data.posterPath} alt={`${data.name} poster`} className="w-24 h-auto object-cover rounded-md" />

      <div className="flex flex-col gap-2 ">
        <div>
          <h3 className="text-xl font-semibold mb-2 ">{data.name}</h3>
          <div className="flex flex-row items-center gap-8">
            <div className="flex items-center space-x-2 text-sm dark:text-gray-400">
              <FontAwesomeIcon icon={faCalendar} className="h-4 w-4 text-red-600" />
              <span>{new Date(data.airDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPlayCircle} className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">{data.episodeCount} episodes</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">{data.voteAverage.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-justify mb-4">{data.overview}</p>
      </div>
    </div>
  );
};
