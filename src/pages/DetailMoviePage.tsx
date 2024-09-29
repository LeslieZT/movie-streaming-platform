import { useParams } from "react-router-dom";
import { DetailMovie } from "../components/DetailMovie/DetailMovie";

export const DetailMoviePage = () => {
  const { id } = useParams();
  return (
    <>
      <DetailMovie />
    </>
  );
};
