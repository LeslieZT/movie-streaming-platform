import { MovieCarousel } from "../components/Carousel/MovieCarousel";
import { ReleasedMovies } from "../components/Movie/ReleasedMovies";
import { ReleasedSeries } from "../components/Series/ReleasedSeries";
import { Recommended } from "../components/Recommended/Recommended";

export const HomePage = () => {
  return (
    <>
      <MovieCarousel />
      <div className="w-[70%] m-auto flex flex-col gap-16">
        <ReleasedMovies />
        <ReleasedSeries />
        <Recommended />
      </div>
    </>
  );
};
