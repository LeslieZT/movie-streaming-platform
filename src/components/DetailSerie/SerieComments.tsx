import { useSerieComments } from "../../hooks/DetailSerie/useSerieComments";
import { Review } from "../../types/Review.type";
import { CommentCard } from "../Comment/CommentCard";

export const SerieComments = () => {
  const { results: comments, loading, errors } = useSerieComments();

  if (loading || !comments) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error: {errors}</div>;
  }

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-12 text-white">Comments</h2>
      <div className="flex flex-col gap-8">
        {comments.length > 0 ? (
          comments.map((comment: Review) => <CommentCard key={comment.id} {...comment} />)
        ) : (
          <div className="text-white">No comments</div>
        )}
      </div>
    </div>
  );
};
