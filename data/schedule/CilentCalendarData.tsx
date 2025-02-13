import type { WeekData, CaregiverDayData } from "@/types/ScheduleType"
import { getCurrentWeekDates, formatDate, getDayName } from "@/utils/DateUtils"

const currentWeekDates = getCurrentWeekDates()

/**
 * Weekly calendar data for the client view
 *
 * This data structure represents a week's worth of appointments for a single client.
 * It includes dummy data for demonstration purposes, with varying appointment durations and times.
 */
export const clientWeeklyData: WeekData<CaregiverDayData> = {
    weekOf: formatDate(currentWeekDates[0]),
    days: currentWeekDates.map((date, index) => ({
        date: date.getDate(),
        fullDate: date,
        day: getDayName(date),
        isSelected: index === 1, // Set Tuesday as selected for demonstration
        appointments: [
            // Monday
            ...(index === 0
                ? [
                    {
                        id: "appt-1",
                        startTime: "09:00",
                        endTime: "11:00",
                        client: {
                            id: "caregiver-1",
                            name: "Sarah Johnson",
                            location: "Home Care",
                            profileImage: "/placeholder.svg?height=32&width=32",
                        },
                    },
                    {
                        id: "appt-2",
                        startTime: "14:00",
                        endTime: "16:00",
                        client: {
                            id: "caregiver-2",
                            name: "Michael Brown",
                            location: "Physical Therapy",
                            profileImage: "/placeholder.svg?height=32&width=32",
                        },
                    },
                ]
                : []),
            // Tuesday
            ...(index === 1
                ? [
                    {
                        id: "appt-3",
                        startTime: "10:00",
                        endTime: "12:00",
                        client: {
                            id: "caregiver-3",
                            name: "Emily Davis",
                            location: "Home Care",
                            profileImage: "/placeholder.svg?height=32&width=32",
                        },
                    },
                    {
                        id: "appt-4",
                        startTime: "15:00",
                        endTime: "16:00",
                        client: {
                            id: "caregiver-4",
                            name: "David Wilson",
                            location: "Medication Management",
                            profileImage: "/placeholder.svg?height=32&width=32",
                        },
                    },
                ]
                : []),
            // Wednesday to Sunday
            ...(index >= 2
                ? [
                    {
                        id: `appt-${index + 3}`,
                        startTime: ["09:00", "11:00", "10:00", "14:00", "09:00"][index - 2],
                        endTime: ["11:00", "13:00", "12:00", "16:00", "11:00"][index - 2],
                        client: {
                            id: `caregiver-${index + 3}`,
                            name: ["Lisa Taylor", "Robert Anderson", "Jennifer White", "William Lee", "Karen Martin"][index - 2],
                            location: ["Home Care", "Physical Therapy", "Home Care", "Occupational Therapy", "Home Care"][
                            index - 2
                                ],
                            profileImage: "/placeholder.svg?height=32&width=32",
                        },
                    },
                ]
                : []),
        ],
    })),
}

