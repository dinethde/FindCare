import type { Comment } from "../types";
import photo from "@/public/images/photo.png";

export const comments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Dineth De Silva",
      avatar: photo.src,
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
      avatar: photo.src,
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
      avatar: photo.src,
    },
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    timestamp: "8:35pm 07/05/2024",
    type: "complaint",
  },
];
