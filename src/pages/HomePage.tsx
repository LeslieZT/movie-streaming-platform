import { ReleasedMovies } from "../components/Movie/ReleasedMovies";
import { Recommended } from "../components/Recommended/Recommended";
import { ReleasedSeries } from "../components/Series/ReleasedSeries";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      <ReleasedMovies />
      <ReleasedSeries />
      <Recommended />
    </div>
  );
};
