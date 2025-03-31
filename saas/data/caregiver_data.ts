import type { Caregiver } from "@/types/caregiver"

/**
 * Sample data for the caregiver profile
 * In a real application, this would come from an API
 */
export const caregiverData: Caregiver = {
  name: "Dineth De Silva",
  profileImage: "/placeholder.svg?height=500&width=500",
  location: "Dahlonega, Georgia, United States",
  rating: 4.2,
  reviews: 76,
  keyStats: [
    {
      value: "4.5",
      label: "House-Holds Certificate",
    },
    {
      value: "10+",
      label: "Clients Served",
    },
  ],
  hostedBy: {
    agency: "Find Care",
    years: 8,
    image: "/placeholder.svg?height=100&width=100",
  },
  keyFeatures: [
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Orci proin massa nisi sit.",
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Orci proin massa nisi sit.",
    },
  ],
  about:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit et eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  normalFeatures: [
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
    },
  ],
  education: [
    {
      level: "NQO LEVEL 5",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
    },
    {
      level: "NQO LE",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      level: "CERTIFICATE III",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      level: "FIRST AID",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ],
  ratingSection: {
    rating: 5.0,
    date: "20th February 2023",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit.",
    reviewer: "Dineth Silva",
    reviewerImage: "/placeholder.svg?height=100&width=100",
  },
  agencyDetails: {
    name: "Find Care",
    logo: "/placeholder.svg?height=100&width=100",
    reviews: 486,
    rating: 5.0,
    years: 8,
    caregivers: "100+ caregivers",
    responseRate: "100%",
    responseTime: "within an hour",
  },
  hostDetails: ["100+ caregivers", "Response rate: 100%", "Responds within an hour"],
}

