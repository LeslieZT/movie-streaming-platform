import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { MovieCarouselItem } from "./MovieCarouselItem";
import { useNowPlayingMovies } from "../../hooks/home/useNowPlayingMovies";

export const MovieCarousel = () => {
  const { results: movies } = useNowPlayingMovies();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1));
  }, [movies]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
  }, [movies]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000); // Cambia de slide cada 5 segundos
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  const handleSlideClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (!movies || movies.length === 0) return <div>Loading...</div>;

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative h-[750px] w-full m-auto group">
      <MovieCarouselItem data={currentMovie} />
      {/* Flechas de navegación */}
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
        }}
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-white" />
      </button>
      <button
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
        }}
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-white" />
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`h-4 rounded-full ${index === currentIndex ? "bg-red-600 w-8" : "bg-white/50 w-4"}`}
            onClick={() => handleSlideClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      {/* Botón de auto-reproducción */}
      <button
        className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-black/50 text-white px-4 py-2 rounded-full"
        onClick={toggleAutoPlay}
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
