import type { Caregiver } from "@/types/caregiver";
import CgImage from "@/public/images/photo.png";

/**
 * Sample data for the caregiver profile
 * In a real application, this would come from an API
 */
export const caregiverData: Caregiver[] = [
  {
    id: 1,
    name: "Dineth De Silva",
    profileImage: CgImage,
    location: "Dahlonega, Georgia, United States",
    rating: 4.2,
    reviews: 76,
    status: "Active",
    keyStats: [
      {
        value: "4.5",
        label: "CSR",
      },

      {
        value: "Household favourite",
        label: undefined,
      },

      {
        value: "10+",
        label: "Clients Served",
      },
    ],
    hostedBy: {
      agency: "Find Care",
      years: 8,
      image: CgImage,
    },
    keyFeatures: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Orci proin massa nisi sit.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Orci proin massa nisi sit.",
      },
    ],
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit et eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    normalFeatures: [
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    education: [
      {
        level: "NQO LEVEL 5",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum.",
      },
      {
        level: "NQO LE",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        level: "CERTIFICATE III",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        level: "FIRST AID",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
    ],
    agencyReviews: [
      {
        rating: 5.0,
        date: "20th February 2023",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit.",
        reviewer: "Dineth Silva",
        reviewerImage: CgImage,
      },

      {
        rating: 4.0,
        date: "20th February 2023",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit.",
        reviewer: "Dineth Silva",
        reviewerImage: CgImage,
      },

      {
        rating: 5.0,
        date: "20th February 2023",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit.",
        reviewer: "Dineth Silva",
        reviewerImage: CgImage,
      },

      {
        rating: 5.0,
        date: "20th February 2023",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit. Tempus dolor sit amet consectetur, adipisicing elit. Tempus dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatum. Orci proin massa nisi sit.",
        reviewer: "Dineth Silva",
        reviewerImage: CgImage,
      },
    ],
    agencyDetails: {
      name: "Find Care",
      logo: CgImage,
      reviews: 486,
      rating: 5.0,
      years: 8,
      caregivers: "100+ caregivers",
      responseRate: "100%",
      responseTime: "within an hour",
      verified: true,
    },
    hostDetails: [
      "100+ caregivers",
      "Response rate: 100%",
      "Responds within an hour",
    ],
  },

  {
    id: 2,
    name: "Sarah Johnson",
    profileImage: CgImage,
    location: "Atlanta, Georgia, United States",
    rating: 4.8,
    reviews: 124,
    status: "Not Active",
    keyStats: [
      {
        value: "4.9",
        label: "CSR",
      },

      {
        value: "Highly experienced",
        label: undefined,
      },

      {
        value: "25+",
        label: "Clients Served",
      },
    ],
    hostedBy: {
      agency: "Care Connect",
      years: 5,
      image: CgImage,
    },
    keyFeatures: [
      {
        description:
          "Specialized in elder care with over 10 years of professional experience",
      },
      {
        description:
          "Certified in dementia care and Alzheimer's patient management",
      },
      {
        description:
          "Experienced with mobility assistance and medical equipment handling",
      },
    ],
    about:
      "With over a decade of experience in geriatric care, I specialize in creating comfortable environments for seniors. My approach focuses on maintaining dignity and independence while providing necessary support. I've worked extensively with clients requiring memory care and mobility assistance, and I'm committed to building relationships based on trust and respect.",
    normalFeatures: [
      {
        description:
          "Available for overnight shifts and emergency care situations",
      },
      {
        description:
          "Skilled in meal preparation for various dietary restrictions",
      },
      {
        description:
          "Experienced with medication management and vital sign monitoring",
      },
    ],
    education: [
      {
        level: "BACHELOR'S IN NURSING",
        description:
          "Georgia State University - Graduated with honors, specialized in geriatric care",
      },
      {
        level: "DEMENTIA CARE CERTIFICATION",
        description:
          "Alzheimer's Association certified practitioner with advanced training",
      },
      {
        level: "CPR AND FIRST AID",
        description:
          "American Red Cross certified, updated annually with latest protocols",
      },
      {
        level: "MEDICATION MANAGEMENT",
        description:
          "Certified in proper administration and tracking of medications for elderly patients",
      },
    ],

    agencyReviews: [
      {
        rating: 5.0,
        date: "15th March 2024",
        review:
          "Sarah was incredible with my father who has late-stage Alzheimer's. Her patience and expertise made a difficult situation much more manageable. She anticipated his needs before he could express them and maintained a calming presence throughout her shifts.",
        reviewer: "Michael Roberts",
        reviewerImage: CgImage,
      },

      {
        rating: 4.8,
        date: "2nd February 2024",
        review:
          "We hired Sarah for my grandmother's post-surgery care, and she exceeded our expectations. Her medical knowledge was evident, and she was proactive about potential complications. My grandmother felt comfortable with her from day one.",
        reviewer: "Jennifer Williams",
        reviewerImage: CgImage,
      },

      {
        rating: 5.0,
        date: "10th December 2023",
        review:
          "Sarah has been caring for my mother for six months now, and we couldn't be happier. She's punctual, professional, and has become like family to us. Her attention to detail with medication management has been particularly impressive.",
        reviewer: "Thomas Garcia",
        reviewerImage: CgImage,
      },

      {
        rating: 4.9,
        date: "5th October 2023",
        review:
          "Our experience with Sarah has been exceptional. She brings positivity and energy while still being respectful of my father's pace and preferences. She's gone above and beyond by creating memory exercises tailored to his interests.",
        reviewer: "Elizabeth Chen",
        reviewerImage: CgImage,
      },
    ],

    agencyDetails: {
      name: "Care Connect",
      logo: CgImage,
      reviews: 312,
      rating: 4.7,
      years: 5,
      caregivers: "75+ caregivers",
      responseRate: "98%",
      responseTime: "within three hours",
      verified: true,
    },

    hostDetails: [
      "75+ caregivers",
      "Response rate: 98%",
      "Responds within three hours",
    ],
  },

  {
    id: 3,
    name: "Marcus Rodriguez",
    profileImage: CgImage,
    location: "Savannah, Georgia, United States",
    rating: 4.6,
    reviews: 53,
    status: "Active",
    keyStats: [
      {
        value: "4.7",
        label: "CSR",
      },

      {
        value: "Physical therapy specialist",
        label: undefined,
      },

      {
        value: "15+",
        label: "Clients Served",
      },
    ],
    hostedBy: {
      agency: "Wellness Home Care",
      years: 3,
      image: CgImage,
    },
    keyFeatures: [
      {
        description:
          "Specializes in rehabilitation and post-surgery recovery care",
      },
      {
        description:
          "Background in physical therapy with focus on mobility improvement",
      },
      {
        description:
          "Trained in adaptive equipment use and home environment modification",
      },
    ],
    about:
      "Former physical therapy assistant with 7 years of clinical experience before transitioning to in-home care. My specialty is helping clients regain independence after surgery or injury. I create personalized exercise routines that can be safely performed at home and adapt daily activities to promote healing while preventing further injury. My approach combines medical knowledge with compassionate support.",
    normalFeatures: [
      {
        description:
          "Familiar with most orthopedic recovery protocols and equipment",
      },
      {
        description:
          "Experience with stroke recovery and neurological rehabilitation",
      },
      {
        description:
          "Capable of coordinating care with physical therapists and doctors",
      },
    ],
    education: [
      {
        level: "ASSOCIATE'S IN PHYSICAL THERAPY",
        description:
          "Georgia Technical College - Specialized in geriatric rehabilitation",
      },
      {
        level: "CERTIFIED NURSING ASSISTANT",
        description:
          "State of Georgia certification with home care specialization",
      },
      {
        level: "STRENGTH TRAINING SPECIALIST",
        description:
          "Certified in safe strength training techniques for seniors and limited mobility clients",
      },
      {
        level: "EMERGENCY RESPONSE",
        description:
          "Advanced training in fall prevention and emergency response for at-risk patients",
      },
    ],

    agencyReviews: [
      {
        rating: 4.8,
        date: "7th January 2024",
        review:
          "Marcus was essential to my recovery after hip replacement. He balanced pushing me to progress while ensuring I didn't overdo it. The exercises he taught me made a huge difference in my mobility, and he was always punctual and professional.",
        reviewer: "Patricia Thompson",
        reviewerImage: CgImage,
      },

      {
        rating: 4.5,
        date: "18th November 2023",
        review:
          "We hired Marcus to help my father after his stroke. His knowledge of neurological recovery was impressive, and he designed activities that were both therapeutic and engaging. He was patient even on difficult days and celebrated every small victory.",
        reviewer: "David Patel",
        reviewerImage: CgImage,
      },

      {
        rating: 5.0,
        date: "3rd September 2023",
        review:
          "Marcus's background in physical therapy is evident in everything he does. He helped my mother regain confidence in walking after her fall. He also taught our family proper transfer techniques and how to assist with exercises between his visits.",
        reviewer: "Samantha Wilson",
        reviewerImage: CgImage,
      },

      {
        rating: 4.3,
        date: "29th July 2023",
        review:
          "Marcus provided excellent care for my husband during his recovery from back surgery. He was knowledgeable about pain management strategies and adaptive techniques for daily activities. His positive attitude made difficult therapy sessions more bearable.",
        reviewer: "Robert Johnson",
        reviewerImage: CgImage,
      },
    ],

    agencyDetails: {
      name: "Wellness Home Care",
      logo: CgImage,
      reviews: 189,
      rating: 4.5,
      years: 3,
      caregivers: "40+ caregivers",
      responseRate: "95%",
      responseTime: "within a day",
      verified: true,
    },

    hostDetails: [
      "40+ caregivers",
      "Response rate: 95%",
      "Responds within a day",
    ],
  },
];
