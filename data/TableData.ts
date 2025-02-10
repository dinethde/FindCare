import type { Caregiver, Feedback } from "../types/TableTypes"

export const caregiverData: Caregiver[] = [
  {
    id: "1",
    name: "Dineth De Silva",
    contactInfo: "Mon - Wed : 6am - 8pm",
    careType: "Domici Care",
    rate: 4.5,
    location: "Colombo",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    contactInfo: "Thu - Sat : 9am - 5pm",
    careType: "Senior Care",
    rate: 4.8,
    location: "New York",
  },
  {
    id: "3",
    name: "Michael Chen",
    contactInfo: "Mon - Fri : 7am - 3pm",
    careType: "Child Care",
    rate: 4.2,
    location: "San Francisco",
  },
  {
    id: "4",
    name: "Emma Watson",
    contactInfo: "Tue - Sun : 10am - 6pm",
    careType: "Domici Care",
    rate: 4.7,
    location: "London",
  },
  {
    id: "5",
    name: "Carlos Rodriguez",
    contactInfo: "Wed - Mon : 8am - 4pm",
    careType: "Senior Care",
    rate: 4.6,
    location: "Madrid",
  },
]

export const feedbackData: Feedback[] = [
  {
    id: "1",
    name: "Dineth De Silva",
    careType: "Domici Care",
    rate: 4.5,
    review:
      "Excellent care provided. Always punctual and attentive to needs. Highly recommended for anyone seeking quality domiciliary care.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    careType: "Senior Care",
    rate: 4.8,
    review:
      "Sarah is a godsend for our family. Her expertise in senior care has made a significant difference in my father's quality of life. Her patience and kindness are unmatched.",
  },
  {
    id: "3",
    name: "Michael Chen",
    careType: "Child Care",
    rate: 4.2,
    review:
      "Michael is great with kids. He's energetic and creative, always coming up with fun activities. However, sometimes he could be more organized with the daily schedule.",
  },
  {
    id: "4",
    name: "Emma Watson",
    careType: "Domici Care",
    rate: 4.7,
    review:
      "Emma provides top-notch care. She's professional, compassionate, and always goes the extra mile. Her medical knowledge is impressive and reassuring.",
  },
  {
    id: "5",
    name: "Carlos Rodriguez",
    careType: "Senior Care",
    rate: 4.6,
    review:
      "Carlos is a dedicated caregiver. He's particularly good at engaging seniors in meaningful activities and conversations. His Spanish language skills are a bonus for multilingual families.",
  },
]

