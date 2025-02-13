import type { WeekData } from "@/types/ScheduleType"
import { getCurrentWeekDates, formatDate, getDayName } from "@/utils/DateUtils"
import photo from "@/public/images/photo.png"

const currentWeekDates = getCurrentWeekDates()

/**
 * Weekly calendar data for the care provider view
 *
 * This data structure represents a week's worth of appointments for care providers.
 * It includes dummy data for demonstration purposes.
 */
export const weeklyData: WeekData = {
  weekOf: formatDate(currentWeekDates[0]),
  days: currentWeekDates.map((date, index) => ({
    date: date.getDate(),
    fullDate: date,
    day: getDayName(date),
    isSelected: index === 1, // Set Tuesday as selected for demonstration
    appointments: [
      // Generate appointments for all days except Thursday and Sunday
      ...(index !== 3 && index !== 6
        ? [
            {
              id: `appt-${index}-1`,
              title: "Care Session",
              startTime: index % 2 === 0 ? "08:00" : "09:00",
              endTime: index % 2 === 0 ? "12:00" : "13:00",
              numberOfAppointments: 5 + index,
              caregivers: Array(5 + index)
                .fill(0)
                .map((_, i) => ({
                  id: `cg-${index}-${i}`,
                  profileImage: photo.src,
                })),
            },
          ]
        : []),
      // Add a second appointment for Tuesday, Wednesday, and Friday
      ...(index === 1 || index === 2 || index === 4
        ? [
            {
              id: `appt-${index}-2`,
              title: "Care Session",
              startTime: index % 2 === 0 ? "14:00" : "15:00",
              endTime: index % 2 === 0 ? "18:00" : "19:00",
              numberOfAppointments: 4 + (index % 3),
              caregivers: Array(4 + (index % 3))
                .fill(0)
                .map((_, i) => ({
                  id: `cg-${index}-${i + 5}`,
                  profileImage: photo.src,
                })),
            },
          ]
        : []),
    ],
  })),
}

