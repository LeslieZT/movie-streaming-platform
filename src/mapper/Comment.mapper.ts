import { DEFAULT_AVATAR, IMAGE_API_URL } from "../constants/constants";
import { Review, ReviewAPI } from "../types/Review.type";

export const mapComments = (comments: ReviewAPI[]) => {
  return comments.map((comment: ReviewAPI) => {
    return {
      id: comment.id,
      author: comment.author,
      avatar: comment.author_details.avatar_path
        ? `${IMAGE_API_URL}${comment.author_details.avatar_path}`
        : DEFAULT_AVATAR,
      createdAt: comment.created_at,
      content: comment.content,
      likes: comment.author_details.rating,
      disLikes: 0,
    } as Review;
  });
};
