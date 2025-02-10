export interface Caregiver {
  id: string
  profileImage: string
}

export interface Appointment {
  id: string
  title: string
  startTime: string
  endTime: string
  numberOfAppointments: number
  caregivers: Caregiver[]
}

export interface DayData {
  date: number
  fullDate: Date
  day: string
  isSelected?: boolean
  appointments: Appointment[]
}

export interface WeekData {
  weekOf: string
  days: DayData[]
}

