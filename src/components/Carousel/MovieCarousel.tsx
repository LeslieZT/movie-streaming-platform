import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { MovieCarouselItem } from "./MovieCarouselItem";

export const MovieCarousel = () => {
  const movies = [
    {
      title: "Avatar: The Way of Water",
      image: "'./src/assets/avatar.jpeg'",
      genres: ["Action", "Adventure", "Science Fiction"],
      year: 2022,
      duration: "3:12:00",
      rating: 8.5,
      synopsis:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    },
    {
      title: "Movie 2",
      image: "'./src/assets/69c97d0b10eb9431b4cf84df3377b246.png'",
      genres: ["Action", "Adventure", "Science Fiction"],
      year: 2022,
      duration: "3:12:00",
      rating: 8.5,
      synopsis:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    },
    // ... más películas
  ];

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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-full ${index === currentIndex ? "bg-red-600 w-8" : "bg-white/50 w-4"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
