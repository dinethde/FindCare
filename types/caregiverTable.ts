export type CaregiverStatus = "Free" | "Working" | "Leave"

export interface Caregiver {
  id: string
  name: string
  contactInfo: string
  status: CaregiverStatus
  clients: number
  rate: number
  location: string
}

export interface FilterState {
  location?: string
  workingClientsRange: [number, number]
  totalClientsRange: [number, number]
  rate?: number
  status?: CaregiverStatus[]
}

