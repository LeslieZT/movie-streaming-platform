import { MovieCarousel } from "../components/Carousel/MovieCarousel";
import { ReleasedMovies } from "../components/Home/ReleasedMovies";
import { ReleasedSeries } from "../components/Home/ReleasedSeries";
import { Recommended } from "../components/Home/Recommended";
import { Trending } from "../components/Home/Trending";
import RecentlyUpdatedShows from "../components/Home/RecentlyUpdated";

export const HomePage = () => {
  return (
    <>
      <MovieCarousel />
      <div className="lg:w-[70%] lg:m-auto sm:mx-4 flex flex-col gap-16">
        <RecentlyUpdatedShows />
        {/* <Trending />  */}
        <ReleasedMovies />
        <ReleasedSeries />
        {/* <Recommended /> */}
      </div>
    </>
  );
};
