import type { WeekData, CareProviderDayData, Caregiver } from "@/types/ScheduleType"
import { getCurrentWeekDates, formatDate, getDayName } from "@/utils/DateUtils"

const currentWeekDates = getCurrentWeekDates()

/**
 * Generate dummy caregiver appointments for testing
 */
const generateCaregiverAppointments = (dayIndex: number) => {
    // Generate 3-7 caregivers for each day
    const numCaregivers = Math.floor(Math.random() * 5) + 3

    const caregivers: Caregiver[] = Array(numCaregivers)
        .fill(null)
        .map((_, i) => ({
            id: `cg-${dayIndex}-${i}`,
            profileImage: `/placeholder.svg?height=32&width=32`,
        }))

    // Generate 1-3 appointments per caregiver throughout the day
    const appointments: { startTime: string; endTime: string }[] = []

    caregivers.forEach((_, cgIndex) => {
        const numAppointments = Math.floor(Math.random() * 3) + 1

        for (let i = 0; i < numAppointments; i++) {
            // Generate appointments between 4 AM and 8 PM
            const startHour = Math.floor(Math.random() * 16) + 4 // 4 AM to 8 PM
            const duration = Math.floor(Math.random() * 3) + 1 // 1-3 hours
            const endHour = Math.min(startHour + duration, 20) // Don't go past 8 PM

            appointments.push({
                startTime: `${startHour.toString().padStart(2, "0")}:00`,
                endTime: `${endHour.toString().padStart(2, "0")}:00`,
            })
        }
    })

    // Sort appointments by start time
    appointments.sort((a, b) => {
        const aTime = Number(a.startTime.split(":")[0])
        const bTime = Number(b.startTime.split(":")[0])
        return aTime - bTime
    })

    // Find earliest start time and latest end time
    const earliestStart = appointments[0]?.startTime || "09:00"
    const latestEnd = appointments[appointments.length - 1]?.endTime || "17:00"

    return {
        appointments: appointments.length,
        caregivers,
        startTime: earliestStart,
        endTime: latestEnd,
    }
}

/**
 * Weekly calendar data for the care provider view
 *
 * This data structure represents a week's worth of appointments for care providers,
 * consolidating all caregiver appointments for each day into a single event.
 */
export const weeklyData: WeekData<CareProviderDayData> = {
    weekOf: formatDate(currentWeekDates[0]),
    days: currentWeekDates.map((date, index) => {
        // Skip appointments for Sunday (index 6)
        const dayData = index !== 6 ? generateCaregiverAppointments(index) : null

        return {
            date: date.getDate(),
            fullDate: date,
            day: getDayName(date),
            isSelected: index === 1, // Set Tuesday as selected for demonstration
            appointments: dayData
                ? [
                    {
                        id: `day-${index}`,
                        title: "Care Sessions",
                        startTime: dayData.startTime,
                        endTime: dayData.endTime,
                        numberOfAppointments: dayData.appointments,
                        caregivers: dayData.caregivers,
                    },
                ]
                : [],
        }
    }),
}

