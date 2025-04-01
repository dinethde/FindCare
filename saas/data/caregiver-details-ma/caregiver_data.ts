import type { CaregiverData } from "@/types/caregiver-details-ma/caregiver"

/**
 * Sample data for the caregiver information form
 */
export const caregiverData: CaregiverData = {
  id: "CG001",
  name: "Dineth Silva",
  caregiverName: "Dineth Silva",
  caregiverId: "A1001",
  tagline: "Lorem ipsum dolor sit amet consectetur. Ut lectus...",
  photo: "/placeholder.svg?height=32&width=32", // Using placeholder image
  about: "Lorem ipsum dolor sit amet consectetur. Ut lectus...",
  totalClients: 150,
  yearsOfExcellence: 7,
  liveIn: "Coimbo 04, colpety",
  clientSatisfactionRate: "95%",

  // Selected feature items
  caregiverSpecificity: [
    {
      title: "Top caregivers",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "Experienced",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "Certified",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
  ],

  keyFeatures: [
    {
      title: "24/7 Availability",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "Medical Training",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "Multilingual",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
  ],

  generalFeatures: [
    {
      title: "Background Checked",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "First Aid Certified",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "Transportation",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
  ],

  // Available options for each feature section
  availableFeatures: {
    caregiverSpecificity: [
      {
        title: "Top caregivers",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Experienced",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Certified",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Specialized Care",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Dementia Care",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Elderly Care",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
    ],
    keyFeatures: [
      {
        title: "24/7 Availability",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Medical Training",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Multilingual",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Meal Preparation",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Medication Management",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Companionship",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
    ],
    generalFeatures: [
      {
        title: "Background Checked",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "First Aid Certified",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Transportation",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Light Housekeeping",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Grocery Shopping",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
      {
        title: "Mobility Assistance",
        description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
      },
    ],
  },

  // Certification items
  certifications: [
    {
      title: "Top caregivers",
      date: "04/07/2022",
      issuer: "Sri Lanka Goverment",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
    {
      title: "Top caregivers",
      date: "04/07/2022",
      issuer: "Sri Lanka Goverment",
      description: "Lorem ipsum dolor sit amet consectetur. Blandit consequat proin amet tellus blandit varius.",
    },
  ],
}

