export interface Caregiver {
  id: string
  name: string
  image: string
  clients: number
  stats: {
    satisfaction: number
    lateArrivals: number
    cancelShifts: number
    leave: number
  }
}

export interface ShiftStats {
  total: number
  late: number
  cancelled: number
}

export interface ActiveCaregiversStats {
  active: number
  total: number
}

export interface EfficiencyData {
  date: string
  value: number
}

