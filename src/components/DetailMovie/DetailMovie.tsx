import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";

export const DetailMovie = () => {
  return (
    <div className="text-white min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src="../src/assets/avatar.jpeg"
              alt="Silo movie poster"
              className="w-full md:h-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-bold">Silo</h1>
              <button className="bg-red-600 text-white px-4 py-3 rounded-md text-sm font-semibold">
                + Add to Favorite
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8 mt-16">
              <div className="flex gap-4 mb-4">
                <span className="bg-white text-black px-2 py-1 rounded text-sm">Drama</span>
                <span className="bg-white text-black px-2 py-1 rounded text-sm">Science Fiction</span>
              </div>
              <div className="flex gap-4 text-sm mb-4">
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
                  {"2022"}
                </span>

                <span className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" />
                  {"3:15:00"}
                </span>

                <span className="flex items-center">
                  <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-2 text-yellow-500" />
                  {"8.5"}
                </span>
              </div>
            </div>

            <p className="mb-4 text-justify">
              In a ruined and toxic future, a community exists in a giant underground silo that plunges hundreds of
              stories deep. There, men and women live in a society full of regulations they believe are meant to protect
              them.
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex gap-2 justify-start">
                <p className="w-1/5 font-semibold text-right">Country:</p>
                <p className="w-4/5 text-justify">United States</p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Genre:</p>
                <p className="w-4/5 text-justify">Drama, Science Fiction</p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Date Release:</p>
                <p className="w-4/5 text-justify">May 05 2023</p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Production:</p>
                <p className="w-4/5 text-justify">AMC Studios</p>
              </div>
              <div className="flex gap-2">
                <p className="w-1/5 font-semibold text-right">Cast:</p>
                <p className="w-4/5 text-justify">
                  Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones, David Oyewolo, Tim Robbins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
