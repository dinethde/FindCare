import { StaticImageData } from "next/image";

export interface Caregiver {
  name: string;
  profileImage: string | StaticImageData;
  location: string;
  rating: number;
  reviews: number;
  keyStats: {
    value: string;
    label: string | undefined;
  }[];

  hostedBy: {
    agency: string;
    years: number;
    image: string;
  };

  keyFeatures: {
    description: string;
  }[];

  about: string;
  normalFeatures: {
    description: string;
  }[];

  education: {
    level: string;
    description: string;
  }[];

  agencyReviews: {
    rating: number;
    date: string;
    review: string;
    reviewer: string;
    reviewerImage: string;
  }[];

  agencyDetails: {
    name: string;
    logo: string;
    reviews: number;
    rating: number;
    years: number;
    caregivers: string;
    responseRate: string;
    responseTime: string;
    verified: boolean;
  };

  hostDetails: string[];
}
