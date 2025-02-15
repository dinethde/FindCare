export interface Caregiver {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string; // This will now be clean text without wrapping <p> tags
  timestamp: string;
  type: "feedback" | "compliment" | "complaint";
  caregiverId?: string;
  caregiverName?: string;
}

export interface CommentFormData {
  content: string;
  type: "feedback" | "compliment" | "complaint";
  caregiverId: string;
  caregiverName: string;
}
