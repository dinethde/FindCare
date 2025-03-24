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

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export interface ButtonProps {
  variant?: "primary" | "feedback" | "compliment" | "complaint";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
