import type { AgencyData, Appointment } from "../types/ScheduleTypes"
import { Calendar } from "./Calendar"
import { calculateEventPosition } from "../utils/TimeUtils" // Import the function
import Image from "next/image"

interface CareProviderCalendarProps {
  agencyData: AgencyData
}

interface ConsolidatedAppointment {
  id: string
  startTime: string
  endTime: string
  numberOfAppointments: number
  caregiverIds: string[]
}

export function CareProviderCalendar({ agencyData }: CareProviderCalendarProps) {
  const consolidateAppointments = (appointments: Appointment[]): ConsolidatedAppointment => {
    const sortedAppointments = appointments.sort((a, b) => a.startTime.localeCompare(b.startTime))
    return {
      id: `consolidated-${sortedAppointments[0].id}`,
      startTime: sortedAppointments[0].startTime,
      endTime: sortedAppointments[sortedAppointments.length - 1].endTime,
      numberOfAppointments: sortedAppointments.length,
      caregiverIds: [...new Set(sortedAppointments.map((appt) => appt.caregiverId))],
    }
  }

  const consolidatedSchedule = {
    weekOf: agencyData.schedule.weekOf,
    days: agencyData.schedule.days.map((day) => ({
      ...day,
      appointments: day.appointments.length > 0 ? [consolidateAppointments(day.appointments)] : [],
    })),
  }

  const modifiedAgencyData: AgencyData = {
    ...agencyData,
    schedule: consolidatedSchedule,
  }

  return (
    <Calendar
      agencyData={modifiedAgencyData}
      view="care-provider"
      renderAppointment={(appointment, isSelected) => (
        <CareProviderAppointmentCard
          appointment={appointment as ConsolidatedAppointment}
          agencyData={agencyData}
          isSelected={isSelected}
        />
      )}
    />
  )
}

interface CareProviderAppointmentCardProps {
  appointment: ConsolidatedAppointment
  agencyData: AgencyData
  isSelected: boolean
}

function CareProviderAppointmentCard({ appointment, agencyData, isSelected }: CareProviderAppointmentCardProps) {
  const { top, height } = calculateEventPosition(appointment.startTime, appointment.endTime)

  const styles = isSelected
    ? {
        wrapper: "bg-brand-colors-brand3 text-white",
        title: "text-white",
        subtitle: "text-[#FFDDCC]",
        avatarContainer: "bg-[#FFF1EB]",
        time: "bg-[#FFF1EB] text-[#FF7733]",
        border: "none"
      }
    : {
        wrapper: "bg-[#FFF5E6] text-brand-colors-brand2",
        title: "text-brand-colors-brand2",
        subtitle: "text-brand-colors-brand4 font-semibold",
        avatarContainer: "bg-white",
        time: "bg-[#FF7733] text-white",
        border: "border-2 border-brand-colors-brand8"
      }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength - 1) + "…"
  }

  return (
    <div
      className={` absolute left-0 right-0 rounded-lg p-2 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:z-10 cursor-pointer ${styles.wrapper}  ${styles.border}`}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        minHeight: "80px",
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h3 className={`text-regular-text-thicker ${styles.title}`}>
            <span
              className="font-semibold truncate block"
              title={`${appointment.numberOfAppointments} Care appointments`}
            >
              {`${appointment.numberOfAppointments} Care appointments`}
            </span>
          </h3>
          <p className={`text-small-text ${styles.subtitle}`}>
            <span className="font-medium truncate block" title={`${appointment.caregiverIds.length} Caregivers`}>
              {`${appointment.caregiverIds.length} Caregivers`}
            </span>
          </p>

          {/* Caregiver avatars */}
          <div className="mt-2">
            <div
              className={`inline-flex items-center ${styles.avatarContainer} rounded-full px-2 py-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)]`}
            >
              <div className="flex -space-x-3">
                {appointment.caregiverIds.slice(0, 3).map((caregiverId, index) => (
                  <div
                    key={caregiverId}
                    className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden"
                    style={{ zIndex: 3 - index }}
                  >
                    <Image
                      src={agencyData.caregivers[caregiverId].profileImage || "/placeholder.svg"}
                      alt={`Caregiver ${index + 1}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              {appointment.caregiverIds.length > 3 && (
                <span className={`ml-1 text-tagline ${styles.title}`}>+{appointment.caregiverIds.length - 3}</span>
              )}
            </div>
          </div>
        </div>

        {/* Time display */}
        <div className={`px-2 py-1 rounded text-tagline ${styles.time} inline-block w-fit`}>
          {appointment.startTime} - {appointment.endTime}
        </div>
      </div>
    </div>
  )
}

