import type { CommentCardProps } from "../types"
import { Avatar } from "./Avatar"
import { Button } from "./Button"

export function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Avatar src={comment.author.avatar} alt={comment.author.name} />
          <div>
            <h3 className="font-medium text-gray-900">{comment.author.name}</h3>
            <p className="text-sm text-gray-500">{comment.timestamp}</p>
          </div>
        </div>
        <Button variant={comment.type} className="text-sm">
          {comment.type.charAt(0).toUpperCase() + comment.type.slice(1)}
        </Button>
      </div>
      <div className="mt-4 text-gray-700">{comment.content}</div>
    </div>
  )
}

