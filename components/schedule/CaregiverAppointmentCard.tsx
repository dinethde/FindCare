import Image from "next/image"
import type { CaregiverAppointment } from "@/types/ScheduleType"
import { calculateEventPosition } from "@/utils/TimeUtils"
import "@/app"

interface CaregiverAppointmentCardProps {
  data: CaregiverAppointment
  isSelected?: boolean
}

/**
 * CaregiverAppointmentCard component
 *
 * Renders an appointment card for a caregiver's schedule.
 * The card's appearance and layout adapt based on the appointment duration.
 *
 * @param {CaregiverAppointmentCardProps} props - The component props
 * @param {CaregiverAppointment} props.data - The appointment data
 * @param {boolean} [props.isSelected] - Whether the appointment is selected
 * @returns {JSX.Element} The rendered appointment card
 */
export function CaregiverAppointmentCard({ data, isSelected }: CaregiverAppointmentCardProps) {
  const { top, height } = calculateEventPosition(data.startTime, data.endTime)

  // Calculate duration in hours for styling decisions
  const startHour = Number.parseInt(data.startTime.split(":")[0])
  const startMinute = Number.parseInt(data.startTime.split(":")[1])
  const endHour = Number.parseInt(data.endTime.split(":")[0])
  const endMinute = Number.parseInt(data.endTime.split(":")[1])
  const duration = endHour - startHour + (endMinute - startMinute) / 60

  const isExactlyTwoHours = duration === 2
  const isLessThanTwoHours = duration < 2




  /**
   * Determines the styling based on the appointment duration
   * This allows for a consistent visual hierarchy across different appointment lengths
   */
  const getStylesByDuration = () => {
    if (isLessThanTwoHours) {
      return {
        wrapper: "bg-brand text-white",
        content: "flex-col justify-between h-full",
        title: "text-[14px] font-bold truncate",
        button: "hidden",
      }
    }
    if (isExactlyTwoHours) {
      return {
        wrapper: "bg-brand-colors-brand2 text-white",
        content: "flex-row items-center gap-2",
        title: "text-[14px] font-bold truncate",
        location: "text-[12px] font-semibold truncate",
        image: "block w-7 h-7 flex-shrink-0",
        container: "min-w-0 flex-1",
        button: "bg-[#FFEEE5] text-brand-colors-brand2 font-bold",
      }
    }
    if (duration <= 4) {
      return {
        wrapper: "bg-brand-colors-brand2 text-white",
        content: "flex-col items-start gap-1",
        title: "text-[14px] font-bold truncate max-w-full",
        location: "text-[12px] font-semibold truncate max-w-full",
        image: "block w-8 h-8",
        container: "w-full",
        button: "bg-[#FFEEE5] text-brand-colors-brand2 font-bold ",
      }
    }
    return {
      wrapper: "bg-[#FFF5E6] border-2 border-brand-colors-brand5",
      content: "flex-col items-start gap-2",
      title: "text-[14px] font-bold text-[#FA5300] truncate max-w-full",
      location: "text-[12px] text-[#FF7733] truncate max-w-full font-semibold ",
      image: "block w-12 h-12",
      container: "w-full",
      button: "bg-brand-colors-brand3 text-white font-bold ",
    }
  }

  const styles = getStylesByDuration()

  return (
    <div
      className={` absolute left-0 right-0 rounded-lg p-2 
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:z-10 cursor-pointer ${styles.wrapper}`}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        minHeight: isLessThanTwoHours ? "30px" : "80px",
      }}
    >
      <div className={`flex ${styles.content}`}>
        {/* Only show image for appointments 2 hours or longer */}
        {!isLessThanTwoHours && styles.image && (
          <div className={`relative rounded-[4px] overflow-hidden ${styles.image}`}>
            <Image
              src={data.client.profileImage || "/placeholder.svg"}
              alt={data.client.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        )}
        {/* Tailwind utility classes for flexible layout based on appointment duration */}
        <div className={`flex ${isExactlyTwoHours ? "flex-col justify-center" : "flex-col"} ${styles.container || ""}`}>
          <span className={styles.title} title={data.client.name}>
            {data.client.name}
          </span>
          {/* Only show location for appointments 2 hours or longer */}
          {!isLessThanTwoHours && styles.location && (
            <span className={styles.location} title={data.client.location}>
              {data.client.location}
            </span>
          )}
        </div>
      </div>

      {/* Time button - only shown for appointments longer than 2 hours or taller than 40px */}
      {(!isLessThanTwoHours || height > 40) && (
        <div className={` absolute bottom-1 left-2 text-sm px-2 py-1 rounded-md ${styles.button} inline-block w-`}>
          {data.startTime} - {data.endTime}
        </div>
      )}
    </div>


  )
}

