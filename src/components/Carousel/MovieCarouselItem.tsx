import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { NowPlayingMovie } from "../../types/Movie.type";

export const MovieCarouselItem = ({ data }: { data: NowPlayingMovie }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.posterPath})` }}
      className="w-full h-full bg-center bg-cover duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3">
        <div className="flex space-x-4 justify-center">
          <button className="bg-red-600 text-white px-4 py-3 rounded-md flex items-center gap-2">
            Watch Now
            <FontAwesomeIcon icon={faPlay} className="w-4 h-4 mr-2" />
          </button>
          <button className="bg-transparent border-2 border-red-600 text-white px-4 py-3 rounded-md flex items-center gap-2">
            Watch Later
            <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-16 lg:bottom-1/4 lg:left-52 text-white">
        <h2 className="text-4xl font-bold mb-6">{data.title}</h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 mb-8">
          <div className="flex space-x-3">
            {data.genres.map((genre) => (
              <div key={genre.id} className="bg-white  px-3 py-2 rounded-full text-sm">
                <h3 className="text-black font-bold">{genre.name}</h3>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
              {data.releaseDate}
            </span>

            <span className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
              {"30:00:11"}
            </span>

            <span className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2 text-yellow-500" />
              {data.voteAverage.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-base max-w-2xl text-justify">{data.overview}</p>
      </div>
    </div>
  );
};
