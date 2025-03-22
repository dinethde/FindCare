import type { Caregiver, Client, Feedback, Match } from "../types/TableTypes";

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
];

export const feedbackData: Feedback[] = [
  {
    id: "1",
    name: "Dineth De Silva",
    careType: "Domici Care",
    rate: 4.8,
    review:
      "Excellent care provided. Always punctual and attentive to needs. Highly recommended for anyone seeking quality domiciliary care.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    careType: "Senior Care",
    rate: 3.5,
    review:
      "Sarah provides good care for seniors. She's patient and kind, but sometimes could be more proactive in engaging with activities.",
  },
  {
    id: "3",
    name: "Michael Chen",
    careType: "Child Care",
    rate: 2.5,
    review:
      "Michael is energetic but needs improvement in several areas. Organization and time management need work. Communication with parents could be better.",
  },
  {
    id: "4",
    name: "Emma Watson",
    careType: "Domici Care",
    rate: 5.0,
    review:
      "Emma provides exceptional care. She's professional, compassionate, and always goes the extra mile. Her medical knowledge is impressive and reassuring.",
  },
  {
    id: "5",
    name: "Carlos Rodriguez",
    careType: "Senior Care",
    rate: 1.8,
    review:
      "Significant concerns about punctuality and adherence to care protocols. While Carlos is friendly, there are serious issues that need to be addressed.",
  },
];

export const clientData: Client[] = [
  {
    id: "1",
    name: "Dineth De Silva",
    contactInfo: "070 3242 772",
    nok: "Dinuka",
    careType: "Senior Care",
    primaryCaregiver: "CG001",
    location: "Colombo",
    assignedTimes: ["Oct 24 Wed : 6am - 8pm"],
  },
  {
    id: "2",
    name: "John Smith",
    contactInfo: "070 3242 772",
    nok: "Rovindie A",
    careType: "Child Care",
    primaryCaregiver: "CG002",
    location: "Colombo",
    assignedTimes: ["Oct 24 - 26 : 6am - 8pm", "Oct 27 Sun : 6am - 4pm"],
  },
  {
    id: "3",
    name: "Emma Thompson",
    contactInfo: "070 3242 772",
    nok: "Dineth Silva",
    careType: "Child Care",
    primaryCaregiver: "CG003",
    location: "Colombo",
    assignedTimes: ["Oct 24 Wed : 6am - 8pm", "Oct 27 Sun : 6am - 4pm"],
  },
  {
    id: "4",
    name: "Michael Brown",
    contactInfo: "071 1234 567",
    nok: "Sarah Brown",
    careType: "Domici Care",
    primaryCaregiver: "CG004",
    location: "Colombo",
    assignedTimes: ["Oct 25 Thu : 10am - 6pm"],
  },
  {
    id: "5",
    name: "Sarah Wilson",
    contactInfo: "072 9876 543",
    nok: "John Wilson",
    careType: "Senior Care",
    primaryCaregiver: "CG005",
    location: "Colombo",
    assignedTimes: ["Oct 26 Fri : 8am - 4pm", "Oct 28 Sun : 9am - 5pm"],
  },
];

export const matchesData: Match[] = [
  {
    id: "1",
    name: "Dineth De Silva",
    careType: "Domici Care",
    rate: 4,
    location: "Colombo",
    reason:
      "Lorem ipsum dolor sit amet consectetur. Amet scelerisque ac integer condimen",
    isBestMatch: false,
  },
  {
    id: "2",
    name: "Dineth De Silva",
    careType: "Senior Care",
    rate: 4,
    location: "Colombo",
    reason:
      "Lorem ipsum dolor sit amet consectetur. Amet scelerisque ac integer condimen",
    isBestMatch: false,
  },
  {
    id: "3",
    name: "Dineth De Silva",
    careType: "Child Care",
    rate: 4,
    location: "Colombo",
    reason:
      "Lorem ipsum dolor sit amet consectetur. Amet scelerisque ac integer condimen",
    isBestMatch: false,
  },
];
