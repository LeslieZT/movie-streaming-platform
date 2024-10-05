import { MoviewComments } from "../components/DetailMovie/MovieComments";
import { DetailMovie } from "../components/DetailMovie/DetailMovie";
import { SimilarMovies } from "../components/DetailMovie/SimilarMovies";

export const DetailMoviePage = () => {
  return (
    <>
      <div className="lg:w-[70%] lg:m-auto sm:mx-4 flex flex-col gap-16">
        <DetailMovie />
        <SimilarMovies />
        <MoviewComments />
      </div>
    </>
  );
};
