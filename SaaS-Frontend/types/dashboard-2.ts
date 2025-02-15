import type {LucideIcon} from "lucide-react"

export interface CaregiverProfile {
    id: string
    name: string
    location: string
    email: string
    image: string
    about: string | null
}

export interface NavItem {
    title: string
    icon: LucideIcon
    href: string
    isActive?: boolean
}

export interface ShiftStats {
    total: number
    max: number
    cancelled: number
}

export interface LateArrivals {
    count: number
    total: number
}

export interface Metrics {
    clientSatisfaction: {
        percentage: number
        period: string
    }
    totalShifts: {
        count: number
        period: string
        lateShifts: number
        cancelledShifts: number
    }
    tasks: {
        items: string[]
        period: string
    }
}

