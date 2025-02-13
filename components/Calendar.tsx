import { AppointmentCard } from "./AppointmentCard"
import { CalendarHeader } from "./CalendarHeader"
import { HOUR_HEIGHT, TOTAL_HOURS, DAY_START_HOUR } from "../utils/TimeUtils"
import type { AgencyData, Appointment } from "../types/ScheduleTypes"
import { formatDate, getDayName } from "../utils/DateUtils"
import type React from "react"

interface CalendarProps {
  agencyData: AgencyData
  view: "care-provider" | "caregiver" | "client"
  selectedId?: string
  selectedClientId?: string | null
  renderAppointment?: (appointment: Appointment, isSelected: boolean) => React.ReactNode
}

const TIME_COLUMN_WIDTH = 50 // pixels

export function Calendar({ agencyData, view, selectedId, selectedClientId, renderAppointment }: CalendarProps) {
  // Generate time slots for every hour with unique keys
  const timeSlots = Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => {
    const absoluteHour = DAY_START_HOUR + i
    const hour = absoluteHour % 24
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return {
      id: `time-${absoluteHour}`,
      display: `${displayHour} ${ampm}`,
      hour: hour,
      shouldShowLabel: hour % 2 === 0, // Only show label for even hours
    }
  })

  const filterAppointments = (appointments: Appointment[]): Appointment[] => {
    if (view === "care-provider") return appointments
    return appointments.filter((appt) =>
      view === "caregiver" ? appt.caregiverId === selectedId : appt.clientId === selectedId,
    )
  }

  // Add opacity class based on selected client
  const getAppointmentOpacity = (appointment: Appointment) => {
    if (!selectedClientId) return "opacity-100"
    return appointment.clientId === selectedClientId ? "opacity-100" : "opacity-40"
  }

  return (
    <div className="bg-white border border-neutral-3 rounded-xl shadow-lg overflow-hidden shadow-[0px_0px_10px_-1px_rgba(0,_0,_0,_0.12)] ">
      <CalendarHeader
        weekOf={formatDate(agencyData.schedule.weekOf)}
        days={agencyData.schedule.days.map((day) => ({
          date: day.date.getDate(),
          fullDate: day.date,
          day: getDayName(day.date),

        }))}
        headerMargin = {45}
      />

      <div className="flex max-h-[60vh] overflow-y-scroll pt-2">
        {/* Time slots */}
        <div
          className="relative flex-shrink-0 border-r border-neutral-3 flex flex-col items-center"
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
                  className="my-4 absolute text-small-text text-neutral-7 text-right w-fit text-center"
                  style={{
                    top: `${timeSlots.indexOf(timeSlot) * HOUR_HEIGHT}px`,
                    transform: "translateY(-50%)",
                  }}
                >
                 <span className="font-medium"> {timeSlot.display}</span>
                </div>
              ),
          )}
        </div>

        {/* Calendar grid */}
        <div className="flex-grow grid grid-cols-7 gap-2 px-2">
          {agencyData.schedule.days.map((day, index) => (
            <div key={day.date.toISOString()} className="relative min-w-[12px]">
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

                {/* Appointments */}
                {filterAppointments(day.appointments).map((appointment) => (
                  <div key={appointment.id} className={`transition-opacity ${getAppointmentOpacity(appointment)}`}>
                    {renderAppointment ? (
                      renderAppointment(appointment, index === 1)
                    ) : (
                      <AppointmentCard
                        key={appointment.id}
                        data={appointment}
                        view={view}
                        agencyData={agencyData}
                        isSelected={index === 1}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

