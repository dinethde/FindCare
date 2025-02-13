import Image from "next/image"
import type { CareProviderAppointment, CaregiverAppointment } from "@/types/ScheduleType"
import { calculateEventPosition } from "@/utils/TimeUtils"

interface AppointmentCardProps {
  data: CareProviderAppointment | CaregiverAppointment
  isSelected?: boolean
}

/**
 * AppointmentCard component
 *
 * Renders an appointment card for a calendar schedule.
 * The card's appearance and layout adapt based on the appointment duration and type.
 *
 * @param {AppointmentCardProps} props - The component props
 * @param {CareProviderAppointment | CaregiverAppointment} props.data - The appointment data
 * @param {boolean} [props.isSelected] - Whether the appointment is selected
 * @returns {JSX.Element} The rendered appointment card
 */
export function AppointmentCard({ data, isSelected }: AppointmentCardProps) {
  const { top, height } = calculateEventPosition(data.startTime, data.endTime)

  // Calculate duration in hours
  const startHour = Number.parseInt(data.startTime.split(":")[0])
  const startMinute = Number.parseInt(data.startTime.split(":")[1])
  const endHour = Number.parseInt(data.endTime.split(":")[0])
  const endMinute = Number.parseInt(data.endTime.split(":")[1])
  const duration = endHour - startHour + (endMinute - startMinute) / 60

  const isLessThanTwoHours = duration < 2

  // Type guard to check if the appointment is a care provider appointment
  const isCareProviderAppointment = (
      appointment: CareProviderAppointment | CaregiverAppointment,
  ): appointment is CareProviderAppointment => {
    return "numberOfAppointments" in appointment
  }

  /**
   * Determines the styling based on the selected state and duration
   */
  const getStyles = () => {
    if (isCareProviderAppointment(data)) {
      // Care Provider styles
      return isSelected
          ? {
            wrapper: "bg-[#FF7733] text-white",
            title: "text-white",
            subtitle: "text-[#FFDDCC]",
            avatarContainer: "bg-[#FFF1EB]",
            time: "bg-[#FFF1EB] text-[#FF7733]",
          }
          : {
            wrapper: "bg-[#FFF5E6] text-[#FA5300]",
            title: "text-[#FA5300]",
            subtitle: "text-[#FF7733]",
            avatarContainer: "bg-white",
            time: "bg-[#FF7733] text-white",
          }
    }
    // Caregiver/Client styles
    return isSelected
        ? {
          wrapper: "bg-[#FF7733] text-white",
          title: "text-white",
          subtitle: "text-[#FFDDCC]",
          time: "bg-[#FFF1EB] text-[#FF7733]",
        }
        : {
          wrapper: "bg-[#FFF5E6] text-[#FA5300]",
          title: "text-[#FA5300]",
          subtitle: "text-[#FF7733]",
          time: "bg-[#FF7733] text-white",
        }
  }

  const styles = getStyles()

  /**
   * Truncates text and adds ellipsis if it exceeds the specified length
   * @param {string} text - The text to truncate
   * @param {number} maxLength - The maximum length before truncation
   * @returns {string} The truncated text with ellipsis if necessary
   */
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength - 1) + "…"
  }

  return (
      <div
          className={`absolute left-0 right-0 mx-2 rounded-lg p-2 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:z-10 cursor-pointer ${styles.wrapper}`}
          style={{
            top: `${top}px`,
            height: `${height}px`,
            minHeight: isLessThanTwoHours ? "30px" : "80px",
          }}
      >
        {isLessThanTwoHours ? (
            // Display only the name for events less than 2 hours
            <div className="h-full flex items-center">
          <span
              className={`text-regular-text-thicker font-semibold ${styles.title} truncate`}
              title={isCareProviderAppointment(data) ? `${data.numberOfAppointments} Care appts.` : data.client.name}
          >
            {isCareProviderAppointment(data)
                ? truncateText(`${data.numberOfAppointments} Care appts.`, 20)
                : truncateText(data.client.name, 20)}
          </span>
            </div>
        ) : (
            // Full display for events 2 hours or longer
            <div className="h-full flex flex-col justify-between">
              {isCareProviderAppointment(data) ? (
                  // Care Provider View
                  <div className="flex flex-col gap-1">
                    <h3 className={`text-regular-text-thicker ${styles.title}`}>
                <span className="font-semibold truncate block" title={`${data.numberOfAppointments} Care appts.`}>
                  {truncateText(`${data.numberOfAppointments} Care appts.`, 25)}
                </span>
                    </h3>
                    <p className={`text-small-text ${styles.subtitle}`}>
                <span className="font-medium truncate block" title={`${data.caregivers.length} Caregivers`}>
                  {truncateText(`${data.caregivers.length} Caregivers`, 20)}
                </span>
                    </p>

                    {/* Caregiver avatars */}
                    <div className="mt-2">
                      <div
                          className={`inline-flex items-center ${styles.avatarContainer} rounded-full px-2 py-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)]`}
                      >
                        <div className="flex -space-x-3">
                          {data.caregivers.slice(0, 3).map((caregiver, index) => (
                              <div
                                  key={caregiver.id}
                                  className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden"
                                  style={{ zIndex: 3 - index }}
                              >
                                <Image
                                    src={caregiver.profileImage || "/placeholder.svg"}
                                    alt={`Caregiver ${index + 1}`}
                                    width={32}
                                    height={32}
                                    className="object-cover"
                                />
                              </div>
                          ))}
                        </div>
                        {data.caregivers.length > 3 && (
                            <span className={`ml-1 text-tagline ${styles.title}`}>+{data.caregivers.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
              ) : (
                  // Caregiver/Client View
                  <div className="flex flex-col gap-1">
              <span
                  className={`text-regular-text-thicker font-semibold ${styles.title} truncate`}
                  title={data.client.name}
              >
                {truncateText(data.client.name, 25)}
              </span>
                    <span className={`text-small-text ${styles.subtitle} truncate`} title={data.client.location}>
                {truncateText(data.client.location, 30)}
              </span>
                  </div>
              )}

              {/* Time display */}
              <div className={`px-2 py-1 rounded text-tagline ${styles.time} inline-block w-fit`}>
                {data.startTime} - {data.endTime}
              </div>
            </div>
        )}
      </div>
  )
}

