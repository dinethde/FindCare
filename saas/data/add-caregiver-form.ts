import type { FormField, TabOption, Caregiver } from "@/types/form"

// Sample caregiver data
export const caregivers: Caregiver[] = [
  {
    id: "CG0001",
    name: "John Doe",
    tagline: "",
    photo: "",
    about: "",
    totalClients: "",
    yearsExcellence: "",
    liveIn: "",
    caregiverSpecificity: [],
    keyFeatures: [],
    generalFeatures: [],
    email: "",
    password: "",
  },
  {
    id: "CG0002",
    name: "Jane Smith",
    tagline: "",
    photo: "",
    about: "",
    totalClients: "",
    yearsExcellence: "",
    liveIn: "",
    caregiverSpecificity: [],
    keyFeatures: [],
    generalFeatures: [],
    email: "",
    password: "",
  },
]

/**
 * Generates the next caregiver ID
 * @returns {string} The next caregiver ID
 */
export function generateNextCaregiverId(): string {
  const lastId = caregivers[caregivers.length - 1]?.id ?? "CG0000"
  const numPart = Number.parseInt(lastId.slice(2), 10)
  return `CG${(numPart + 1).toString().padStart(4, "0")}`
}

// Define tab options for the form
export const tabOptions: TabOption[] = [
  {
    id: "manually",
    title: "Manually Add",
    description: "Add a new caregiver manually by filling out the form.",
  },
  {
    id: "bulk",
    title: "Bulk Upload",
    description: "Upload multiple caregivers at once using a CSV file.",
  },
]

// Define form fields for the caregiver form
export const formFields: FormField[] = [
  {
    id: "caregiver_name",
    label: "Caregiver Name",
    type: "text",
    placeholder: "Enter caregiver name",
  },
  {
    id: "caregiver_id",
    label: "Caregiver Id",
    type: "text",
    placeholder: "Auto-generated",
  },
  {
    id: "tagline",
    label: "Tagline",
    type: "text",
    placeholder: "Enter tagline",
  },
  {
    id: "photo",
    label: "Photo",
    type: "file",
  },
  {
    id: "about",
    label: "About",
    type: "textarea",
    placeholder: "Enter about information",
  },
  {
    id: "total_clients",
    label: "Total clients",
    type: "text",
    placeholder: "Enter total clients",
  },
  {
    id: "years_excellence",
    label: "Years of excellence",
    type: "text",
    placeholder: "Enter years of excellence",
  },
  {
    id: "live_in",
    label: "Live in",
    type: "text",
    placeholder: "Enter location",
  },
  {
    id: "caregiver_specificity",
    label: "Caregiver Specificity",
    type: "select",
    maxSelect: 3,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    id: "key_features",
    label: "Key Features",
    type: "select",
    maxSelect: 3,
    options: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    id: "general_features",
    label: "General Features",
    type: "select",
    maxSelect: 3,
    options: ["General 1", "General 2", "General 3", "General 4"],
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "example@gmail.com",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "******",
  },
]

