import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/UtilDate";

interface CommentProps {
  id: string;
  author: string;
  avatar: string;
  createdAt: string;
  content: string;
  likes: number;
  disLikes: number;
}

export const CommentCard = ({ author, avatar, createdAt, content, likes, disLikes }: CommentProps) => {
  return (
    <div className="flex gap-8 justify-start">
      <img src={avatar} alt={`${author}'s avatar`} className="w-20 h-20 rounded-full" />
      <div className="flex-1">
        <div className="mb-1">
          <h2 className="text-white font-semibold mr-2">{author}</h2>
          <h2 className="text-gray-400 text-sm">{formatDate(createdAt)}</h2>
        </div>
        <p className="text-gray-300 mb-2 text-justify">{content.slice(0, 500)} . . .</p>
        <div className="flex items-center space-x-4 text-gray-400">
          <button className="flex items-center space-x-1 hover:text-white">
            <FontAwesomeIcon icon={faThumbsUp} className="w-4 h-4 text-white" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-white">
            <FontAwesomeIcon icon={faThumbsDown} className="w-4 h-4 text-white" />
            <span>{disLikes}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-white">
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  );
};
