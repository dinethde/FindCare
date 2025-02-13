"use client"

import { weeklyData } from "@/data/schedule/CalendarData"
import { AppointmentCard } from "./AppointmentCard"
import { CalendarHeader } from "./CalendarHeader"
import { HOUR_HEIGHT, TOTAL_HOURS, DAY_START_HOUR } from "@/utils/TimeUtils"

const TIME_COLUMN_WIDTH = 60 // pixels

/**
 * WeeklyCalendar component
 *
 * Renders a weekly calendar view for care providers, showing appointments across the week.
 *
 * @returns {JSX.Element} The rendered weekly calendar
 */
export function WeeklyCalendar() {
  // Generate time slots for the side bar
  const timeSlots = Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => {
    const absoluteHour = DAY_START_HOUR + i
    const hour = absoluteHour % 24
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return {
      id: `time-${absoluteHour}`,
      display: `${displayHour} ${ampm}`,
      hour: hour,
      shouldShowLabel: hour % 2 === 0, // Only show label for even hours for cleaner look
    }
  })

  return (
    <div className="bg-white border border-neutral-3 rounded-xl shadow-lg overflow-hidden shadow-[0px_0px_10px_-1px_rgba(0,_0,_0,_0.12)]">
      <CalendarHeader weekOf={weeklyData.weekOf} days={weeklyData.days} />

      <div className="flex max-h-[60vh] overflow-y-scroll pt-2">
        {/* Time slots column */}
        <div
          className="relative flex-shrink-0 border-r border-neutral-3"
          style={{
            width: `${TIME_COLUMN_WIDTH}px`,
            height: `${HOUR_HEIGHT * TOTAL_HOURS}px`,
          }}
        >
          {timeSlots.map(
            (timeSlot) =>
              timeSlot.shouldShowLabel && (
                <div
                  key={timeSlot.id}
                  className="my-4 absolute text-small-text text-neutral-8 text-right w-full pr-4"
                  style={{
                    top: `${timeSlots.indexOf(timeSlot) * HOUR_HEIGHT}px`,
                    transform: "translateY(-50%)",
                  }}
                >
                  {timeSlot.display}
                </div>
              ),
          )}
        </div>

        {/* Calendar grid */}
        <div className="flex-grow grid grid-cols-7 gap-4 px-4">
          {weeklyData.days.map((day) => (
            <div key={day.day} className="relative min-w-[120px]">
              <div className="relative mt-2" style={{ height: `${HOUR_HEIGHT * TOTAL_HOURS}px` }}>
                {/* Hour grid lines */}
                {timeSlots.map((timeSlot) => (
                  <div
                    key={timeSlot.id}
                    className={`absolute w-full ${
                      timeSlot.shouldShowLabel ? "border-t border-gray-200" : "border-t border-gray-100"
                    }`}
                    style={{
                      top: `${timeSlots.indexOf(timeSlot) * HOUR_HEIGHT}px`,
                    }}
                  />
                ))}

                {/* Render appointments for each day */}
                {day.appointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} data={appointment} isSelected={day.isSelected} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

