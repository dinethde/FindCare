export interface FormField {
  id: string
  label: string
  type: "text" | "email" | "password" | "file" | "select" | "textarea"
  placeholder?: string
  options?: string[]
  maxSelect?: number
}

// Define the structure for a tab option
export interface TabOption {
  id: string
  title: string
  description: string
}

// Define the structure for a caregiver
export interface Caregiver {
  id: string
  name: string
  tagline: string
  photo: string
  about: string
  totalClients: string
  yearsExcellence: string
  liveIn: string
  caregiverSpecificity: string[]
  keyFeatures: string[]
  generalFeatures: string[]
  email: string
  password: string
}

