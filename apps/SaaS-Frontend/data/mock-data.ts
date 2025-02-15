import type { Caregiver, EfficiencyData } from "../types/dashboard"

export const caregivers: Caregiver[] = [
  {
    id: "CG1001",
    name: "Dineth Silva",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analytics%20(2)-rnkxG388fGhyiZ4GBUK1aXVM80NSdf.png",
    clients: 11,
    stats: {
      satisfaction: 95,
      lateArrivals: 0,
      cancelShifts: 0,
      leave: 0,
    },
  },
  {
    id: "CG1002",
    name: "Sarah Johnson",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analytics%20(2)-rnkxG388fGhyiZ4GBUK1aXVM80NSdf.png",
    clients: 9,
    stats: {
      satisfaction: 92,
      lateArrivals: 1,
      cancelShifts: 1,
      leave: 2,
    },
  },
  {
    id: "CG1003",
    name: "Michael Chen",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Analytics%20(2)-rnkxG388fGhyiZ4GBUK1aXVM80NSdf.png",
    clients: 13,
    stats: {
      satisfaction: 88,
      lateArrivals: 2,
      cancelShifts: 1,
      leave: 1,
    },
  },
]

export const shiftStats = {
  total: 115,
  late: 5,
  cancelled: 3,
}

export const activeCaregiversStats = {
  active: 20,
  total: 24,
}

// Generate monthly data points for the last 12 months
export const efficiencyData: EfficiencyData[] = Array.from({ length: 12 }, (_, i) => ({
  date: `2024-${(i + 1).toString().padStart(2, "0")}`,
  value: Math.floor(Math.random() * 30 + 70), // Random values between 70 and 100
}))

