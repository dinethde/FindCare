/**
 * Represents a caregiver in the system
 */
export interface Caregiver {
  id: string
  profileImage: string
}

/**
 * Represents a client in the system
 */
export interface Client {
  id: string
  name: string
  profileImage: string
  location: string
}

/**
 * Base appointment interface with common properties
 */
export interface BaseAppointment {
  id: string
  startTime: string
  endTime: string
}

/**
 * Appointment type for care provider view
 * Extends BaseAppointment with properties specific to care provider appointments
 */
export interface CareProviderAppointment extends BaseAppointment {
  title: string
  numberOfAppointments: number
  caregivers: Caregiver[]
}

/**
 * Appointment type for caregiver view
 * Extends BaseAppointment with properties specific to caregiver appointments
 */
export interface CaregiverAppointment extends BaseAppointment {
  client: Client
}

/**
 * Represents a day in the calendar
 */
export interface DayData {
  date: number
  fullDate: Date
  day: string
  isSelected?: boolean
}

/**
 * Extends DayData for care provider view
 */
export interface CareProviderDayData extends DayData {
  appointments: CareProviderAppointment[]
}

/**
 * Extends DayData for caregiver view
 */
export interface CaregiverDayData extends DayData {
  appointments: CaregiverAppointment[]
}

/**
 * Represents a week of data in the calendar
 * Generic type T extends DayData to allow for different day data types
 */
export interface WeekData<T extends DayData = CareProviderDayData> {
  weekOf: string
  days: T[]
}

