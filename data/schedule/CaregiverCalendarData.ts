import type { WeekData, CaregiverDayData } from "@/types/ScheduleType"
import { getCurrentWeekDates, formatDate, getDayName } from "@/utils/DateUtils"
import photo from "@/public/images/photo.png"

const currentWeekDates = getCurrentWeekDates()

/**
 * Weekly calendar data for the caregiver view
 *
 * This data structure represents a week's worth of appointments for a single caregiver.
 * It includes dummy data for demonstration purposes, with varying appointment durations and times.
 */
export const caregiverWeeklyData: WeekData<CaregiverDayData> = {
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
              startTime: "04:00",
              endTime: "08:00",
              client: {
                id: "client-1",
                name: "Jayantha Silva",
                location: "Panadura",
                profileImage: photo.src,
              },
            },
            {
              id: "appt-2",
              startTime: "10:00",
              endTime: "15:00",
              client: {
                id: "client-2",
                name: "Dineth Silva",
                location: "Panadura",
                profileImage: photo.src,
              },
            },
            // 1.5-hour event for testing short duration styling
            {
              id: "appt-2a",
              startTime: "16:30",
              endTime: "18:00",
              client: {
                id: "client-2a",
                name: "Short Event",
                location: "Colombo",
                profileImage: photo.src,
              },
            },
          ]
        : []),
      // Tuesday
      ...(index === 1
        ? [
            {
              id: "appt-3",
              startTime: "06:00",
              endTime: "08:00",
              client: {
                id: "client-3",
                name: "Rovind Silva",
                location: "Panadura",
                profileImage: photo.src,
              },
            },
            {
              id: "appt-4",
              startTime: "10:00",
              endTime: "14:00",
              client: {
                id: "client-4",
                name: "Jayantha Silva",
                location: "Panadura",
                profileImage: photo.src,
              },
            },
            // 1-hour event for testing short duration styling
            {
              id: "appt-4a",
              startTime: "15:00",
              endTime: "16:00",
              client: {
                id: "client-4a",
                name: "Quick Meeting",
                location: "Galle",
                profileImage: photo.src,
              },
            },
          ]
        : []),
      // Wednesday to Sunday
      ...(index >= 2
        ? [
            {
              id: `appt-${index + 3}`,
              startTime: ["10:00", "08:00", "04:00", "09:00", "08:00"][index - 2],
              endTime: ["18:00", "16:00", "08:00", "11:00", "15:00"][index - 2],
              client: {
                id: `client-${index + 3}`,
                name: ["Dineth Silva", "Dinuka De Silva", "Dineth Silva", "Benali Silva", "Benali Perera"][index - 2],
                location: index === 5 ? "Galle" : "Panadura",
                profileImage: photo.src,
              },
            },
          ]
        : []),
    ],
  })),
}

