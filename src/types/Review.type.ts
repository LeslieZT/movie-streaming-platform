interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface ReviewAPI {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  createdAt: string;
  content: string;
  likes: number;
  disLikes: number;
}
