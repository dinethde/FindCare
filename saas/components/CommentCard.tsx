import Image from "next/image";
import type { Comment } from "@/types/commentTypes";
import { Button } from "./Button";

interface CommentCardProps {
  comment: Comment;
  isButtonShowm?: boolean;
}

export function CommentCard({
  comment,
  isButtonShowm = true,
}: CommentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-3 p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Image
            src={comment.author.avatar}
            alt={comment.author.name}
            width={44}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-regular-text-thicker text-neutral-10">
              {comment.author.name}
            </h3>
            <p className="text-tagline text-neutral-7 mt-1">
              {comment.timestamp}
            </p>
          </div>
        </div>
        {isButtonShowm && (
          <Button variant={comment.type} className="text-small-text">
            {comment.type.charAt(0).toUpperCase() + comment.type.slice(1)}
          </Button>
        )}
      </div>
      <div className="h-[0.8px] w-full bg-neutral-3"></div>

      <div className="text-regular-text text-neutral-11">{comment.content}</div>
    </div>
  );
}
