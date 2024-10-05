import { DetailSerie } from "../components/DetailSerie/DetailSerie";
import { SerieComments } from "../components/DetailSerie/SerieComments";
import { SimilarSeries } from "../components/DetailSerie/SimilarSerie";

export const DetailSeriePage = () => {
  return (
    <>
      <div className="lg:w-[70%] lg:m-auto sm:mx-4 flex flex-col gap-16">
        <DetailSerie />
        <SimilarSeries />
        <SerieComments />
      </div>
    </>
  );
};
