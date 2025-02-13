import Image from "next/image"
import type { Appointment } from "@/types/ScheduleType"
import { calculateEventPosition } from "@/utils/TimeUtils"

interface AppointmentCardProps {
  data: Appointment
  isSelected?: boolean
}

const MAX_VISIBLE_AVATARS = 3

/**
 * AppointmentCard component
 *
 * Renders a card displaying appointment information for care providers.
 *
 * @param {AppointmentCardProps} props - The component props
 * @param {Appointment} props.data - The appointment data
 * @param {boolean} [props.isSelected] - Whether the appointment is selected
 * @returns {JSX.Element} The rendered appointment card
 */
export function AppointmentCard({ data, isSelected }: AppointmentCardProps) {
  const { top, height } = calculateEventPosition(data.startTime, data.endTime)
  const remainingCaregivers = Math.max(0, data.caregivers.length - MAX_VISIBLE_AVATARS)

  // Styles for selected and unselected states
  const darkStyles = {
    bg: "bg-[#FF7733]",
    apptsHeading: "text-white",
    subHeading: "text-[#FFDDCC]",
    buttonBg: "bg-[#FFF1EB]",
    time: "text-[#FF7733]",
  }

  const lightStyles = {
    bg: "bg-[#FFF5E6]",
    apptsHeading: "text-[#FA5300]",
    subHeading: "text-[#FF7733]",
    buttonBg: "bg-[#FF7733]",
    time: "text-white",
  }

  const styles = isSelected ? darkStyles : lightStyles

  return (
    <div
      className={`absolute left-0 right-0 rounded-lg p-2 ${styles.bg} border border-brand-colors-brand5
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg 
        hover:z-10 cursor-pointer`}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        minHeight: "80px",
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h3
            className={`text-regular-text-thicker ${styles.apptsHeading} transition-colors duration-300 ease-in-out hover:text-opacity-80`}
          >
            <span className="font-semibold inline-flex gap-1">
              <p>{data.numberOfAppointments}</p>
              Care appts.
            </span>
          </h3>
          <p
            className={`text-small-text ${styles.subHeading} transition-colors duration-300 ease-in-out hover:text-opacity-80`}
          >
            <span className="font-medium"> {data.caregivers.length} Caregivers</span>
          </p>

          {/* Caregiver avatars */}
          <div className="mt-2">
            <div
              className="inline-flex items-center bg-white rounded-full px-2 py-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)] 
              transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105"
            >
              <div className="flex -space-x-3">
                {data.caregivers.slice(0, MAX_VISIBLE_AVATARS).map((caregiver, index) => (
                  <div
                    key={caregiver.id}
                    className={`w-8 h-8 rounded-full border-2 border-white relative overflow-hidden 
                      transition-transform duration-300 ease-in-out 
                      hover:scale-110 hover:z-10`}
                    style={{ zIndex: MAX_VISIBLE_AVATARS - index }}
                  >
                    <Image
                      src={caregiver.profileImage || "/placeholder.svg"}
                      alt={`Caregiver ${caregiver.id}`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              {remainingCaregivers > 0 && (
                <span
                  className={`text-tagline text-brand-colors-brand2 font-bold 
                  transition-all duration-300 ease-in-out hover:scale-110`}
                >
                  +{remainingCaregivers}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Time display */}
        <div
          className={`px-2 py-2 rounded ${styles.buttonBg} ${styles.time} inline-block 
          transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 text-tagline w-full text-center`}
        >
          {data.startTime} - {data.endTime}
        </div>
      </div>
    </div>
  )
}

