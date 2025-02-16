// comment.types.ts

export interface Author {
  name: string;
  avatar: string;
}

export type CommentType = "feedback" | "compliment" | "complaint";

export interface Comment {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  type: CommentType;
}
