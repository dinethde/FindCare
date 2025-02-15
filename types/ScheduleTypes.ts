// Base entity interfaces
export interface Client {
  id: string
  name: string
  profileImage: string
  location: string
  tasks: Task[]
}

export interface Caregiver {
  id: string
  name: string
  profileImage: string
}

export interface Task {
  id: string
  name: string
  completed: boolean
}

// Appointment related interfaces
export interface Appointment {
  id: string
  startTime: string
  endTime: string
  caregiverId: string
  clientId: string
  status: AppointmentStatus
}

export type AppointmentStatus = "successful" | "late" | "cancelled"

// Schedule related interfaces
export interface DaySchedule {
  date: Date
  appointments: Appointment[]
}

export interface WeekSchedule {
  weekOf: Date
  days: DaySchedule[]
}

// Agency data interface
export interface AgencyData {
  clients: { [id: string]: Client }
  caregivers: { [id: string]: Caregiver }
  schedule: WeekSchedule
}

// Chart related interfaces
export interface ChartData {
  name: string
  value: number
  color: string
}

export interface ChartLegendItem {
  label: string
  value: string | number
  color: string
}

export interface ChartFooterItem {
  label: string
  value: string | number
}

export interface ChartCardProps {
  title: string
  subtitle?: string
  data: ChartData[]
  centerText: string | number
  legend?: {
    items: ChartLegendItem[]
  }
  footer?: ChartFooterItem[]
}

export interface DonutChartProps {
  data: ChartData[]
  centerText: string | number
}

// Statistics interfaces
export interface ShiftStatistics {
  successful: number
  late: number
  cancelled: number
  total: number
}

export interface TaskStatistics {
  completed: number
  total: number
}

// Component prop interfaces
export interface CareProviderDashboardProps {
  agencyData: AgencyData
}

export interface CaregiverCalendarViewProps {
  agencyData: AgencyData
  selectedCaregiverId: string
}

export interface ClientCalendarViewProps {
  agencyData: AgencyData
  selectedClientId: string
}

export interface CalendarProps {
  agencyData: AgencyData
  view: "care-provider" | "caregiver" | "client"
  selectedId?: string
  selectedClientId?: string | null
  renderAppointment?: (appointment: Appointment, isSelected: boolean) => React.ReactNode
}

