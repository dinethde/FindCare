import { RequirementDetails } from "@/types/client-modal/clientProfileData";
import accountIcon from "@/public/assets/icons/account-icon.svg";
import careRecipientInfoIcon from "@/public/assets/icons/care-recipient-details=icon.svg";
import personalInfoIcon from "@/public/assets/icons/personal-info.svg";
import locationIcon from "@/public/assets/icons/location.svg";
import requirementIcon from "@/public/assets/icons/requirements-icon.svg";
import lightBlueIcon from "@/public/assets/icons/lightblue-circle.svg";
import regularBlueIcon from "@/public/assets/icons/regular-blue-circle.svg";
import pinkStarIcon from "@/public/assets/icons/start-pink-icon.svg";
import uniqueStarIcon from "@/public/assets/icons/star-unique-icon.svg";

export const profileData = {
  personal: {
    fullName: "John Doe",
    dateOfBirth: "04/12/1985",
    age: 31,
    gender: "Male",
    nic: "946544200V",
    icon: personalInfoIcon.src,
  },
  careRecipient: {
    id: "CR-00125",
    registeredDate: "03/12/2023",
    signature: "JohnDoeSignature",
    icon: careRecipientInfoIcon.src,
  },
  account: {
    phone: "(+94)71 234 5678",
    email: "john.doe@example.com",
    pwd: "********",
    status: "Logged in",
    icon: accountIcon.src,
  },
  address: {
    address: "15 Regent Street",
    city: "Colombo",
    postalCode: "00700",
    icon: locationIcon.src,
  },
  nok: {
    name: "Jane Doe",
    relation: "Wife",
    phone: "(+94)71 987 6543",
    email: "jane.doe@example.com",
    address: "London",
    icon: personalInfoIcon.src,
  },
  carePlan: {
    plan: "Basic",
    price: "20$/m",
    careHours: "40",
  },
  goals: {
    goalsList: [],
  },
};

export const requirementDetails: RequirementDetails = {
  requirements: {
    heading: "Requirements",
    items: [
      "Must be at least 21 years of age",
      "Willing to work on weekends",
      "Ability to handle emergency situations calmly",
      "Comfortable with pets in the home",
    ],
    icon: requirementIcon.src,
  },
  caregiverRequirements: {
    heading: "Caregiver Requirements",
    items: [
      "Experience with senior care for at least 2 years",
      "Knowledge of basic first aid",
      "Strong communication skills",
      "Patient and empathetic demeanor",
    ],
    icon: regularBlueIcon.src,
  },
  skillsAndExperience: {
    heading: "Skills and Experience",
    items: [
      "CPR and AED certified",
      "Familiarity with mobility aids (wheelchairs, walkers)",
      "Light housekeeping and meal preparation",
      "Experience tracking medication schedules",
    ],
    icon: pinkStarIcon.src,
  },
  weeklyActivities: {
    heading: "Weekly Activities",
    items: [
      "Accompany care recipient on short walks",
      "Plan and prepare balanced meals",
      "Assist with laundry and light cleaning",
      "Engage in daily cognitive exercises",
    ],
    icon: uniqueStarIcon.src,
  },
  specialInstructions: {
    heading: "Special Instructions",
    items: [
      "Monitor blood pressure twice daily",
      "Report any unusual symptoms immediately",
      "Keep a daily care log for family reference",
      "Maintain a friendly, respectful environment",
    ],
    icon: lightBlueIcon.src,
  },
};
