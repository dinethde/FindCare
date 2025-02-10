import type { Comment } from "../types";

export const comments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Dineth De Silva",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    timestamp: "8:35pm 07/05/2024",
    type: "feedback",
  },
  {
    id: "2",
    author: {
      name: "Dineth De Silva",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    timestamp: "8:35pm 07/05/2024",
    type: "compliment",
  },
  {
    id: "3",
    author: {
      name: "Dineth De Silva",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    timestamp: "8:35pm 07/05/2024",
    type: "complaint",
  },
];
