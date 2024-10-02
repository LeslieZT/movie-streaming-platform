import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { MovieCarouselItem } from "./MovieCarouselItem";
import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies";

export const MovieCarousel = () => {
  const { results: movies } = useNowPlayingMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === movies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentMovie = movies[currentIndex];
  if (currentMovie === undefined) return <div>Loading...</div>;

  return (
    <div className="relative h-[750px] w-full m-auto group">
      <MovieCarouselItem data={currentMovie} />
      {/* Flechas de navegación */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} className="w-6 h-6 text-white" />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} className="w-6 h-6 text-white" />
      </div>
      {/* Indicadores */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-full ${index === currentIndex ? "bg-red-600 w-8" : "bg-white/50 w-4"}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
