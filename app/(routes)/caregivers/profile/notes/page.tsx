"use client";

import { useState } from "react";
import { CommentForm } from "@/components/CommentForm";
import { CommentCard } from "@/components/CommentCard";
import { comments as initialComments } from "@/data/Comments";
import type { Comment, CommentFormData } from "@/types";

export default function NotesPage() {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleSubmit = (formData: CommentFormData) => {
    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: {
        name: formData.caregiverName,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: formData.content,
      timestamp:
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }) +
        " " +
        new Date().toLocaleDateString(),
      type: formData.type,
      caregiverId: formData.caregiverId,
      caregiverName: formData.caregiverName,
    };

    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <CommentForm onSubmit={handleSubmit} />
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
