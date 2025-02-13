import Image from "next/image"
import type { Appointment, AgencyData } from "../types/ScheduleTypes"
import { calculateEventPosition } from "../utils/TimeUtils"

interface AppointmentCardProps {
  data: Appointment
  view: "care-provider" | "caregiver" | "client"
  agencyData: AgencyData
  isSelected?: boolean
}

export function AppointmentCard({ data, view, agencyData, isSelected }: AppointmentCardProps) {
  const { top, height } = calculateEventPosition(data.startTime, data.endTime)

  // Calculate duration in hours
  const startHour = Number.parseInt(data.startTime.split(":")[0])
  const startMinute = Number.parseInt(data.startTime.split(":")[1])
  const endHour = Number.parseInt(data.endTime.split(":")[0])
  const endMinute = Number.parseInt(data.endTime.split(":")[1])
  const duration = endHour - startHour + (endMinute - startMinute) / 60

  const isExactlyTwoHours = duration === 2
  const isLessThanTwoHours = duration < 2

  console.log("two hours " + isExactlyTwoHours)

  const getStyles = () => {
    if (view === "care-provider") {
      // Care Provider styles (unchanged)
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
    } else {
      // Caregiver/Client styles
      if (isLessThanTwoHours) {
        return {
          wrapper: "bg-brand-colors-brand3 text-white",
          content: "flex-col justify-between h-full",
          title: "text-regular-text font-bold truncate",
          button: "hidden",
        }
      }
      if (isExactlyTwoHours) {
        return {
          wrapper: "bg-brand-colors-brand3 text-white",
          content: "flex gap-2",
          title: "text-regular-text truncate",
          location: "text-tagline truncate font-medium ",
          image: "hidden",
          container: "min-w-0 ",
          button: "bg-[#FFEEE5] text-[#FF6619] font-bold",
        }
      }
      if (duration <= 4) {
        return {
          wrapper: "bg-brand-colors-brand3 text-white",
          content: "gap-1",
          title: "text-regular-text truncate max-w-full",
          location: "text-tagline truncate max-w-full",
          image: "block w-10 h-10",
          container: "w-full",
          button: "bg-[#FFEEE5] text-[#FF6619] font-bold ",
        }
      }
      return {
        wrapper: "bg-[#FFF5E6] border-2 border-brand-colors-brand5",
        content: "flex-col items-start gap-2",
        title: "text-regular-text text-brand-colors-brand2 truncate max-w-full",
        location: "text-tagline text-brand-colors-brand3 truncate max-w-full ",
        image: "block w-10 h-10",
        container: "w-full",
        button: "bg-brand-colors-brand2 text-white font-bold ",
      }
    }
  }

  const styles = getStyles()

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength - 1) + "…"
  }

  if (view === "care-provider") {
    // Care Provider View (unchanged)
    return (
      <div
        className={`absolute left-0 right-0 mx-2 rounded-lg p-2 
          transition-all duration-300 ease-in-out transform hover:scale-105 
          hover:shadow-lg hover:z-10 cursor-pointer flex flex-col ${styles.wrapper}`}
        style={{
          top: `${top}px`,
          height: `${height}px`,
          minHeight: isLessThanTwoHours ? "30px" : "80px",
        }}
      >
        NO
        {/*{isLessThanTwoHours ? (*/}
        {/*  <div className="h-full flex flex-col items-center">*/}
        {/*    <span*/}
        {/*      className={`text-regular-text-thicker font-semibold ${styles.title} truncate`}*/}
        {/*      title={`${data.numberOfAppointments} Care appts.`}*/}
        {/*    >*/}
        {/*      {truncateText(`${data.numberOfAppointments} Care appts.`, 20)}*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <div className="h-full flex flex-col justify-between">*/}
        {/*    <div className="flex flex-col gap-1">*/}
        {/*      <h3 className={`text-regular-text-thicker ${styles.title}`}>*/}
        {/*        <span className="font-semibold truncate block" title={`${data.numberOfAppointments} Care appts.`}>*/}
        {/*          {truncateText(`${data.numberOfAppointments} Care appts.`, 25)}*/}
        {/*        </span>*/}
        {/*      </h3>*/}
        {/*      <p className={`text-small-text ${styles.subtitle}`}>*/}
        {/*        <span className="font-medium truncate block" title={`${data.caregivers.length} Caregivers`}>*/}
        {/*          {truncateText(`${data.caregivers.length} Caregivers`, 20)}*/}
        {/*        </span>*/}
        {/*      </p>*/}

        {/*      <div className="mt-2">*/}
        {/*        <div*/}
        {/*          className={`inline-flex items-center ${styles.avatarContainer} rounded-full px-2 py-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)]`}*/}
        {/*        >*/}
        {/*          <div className="flex -space-x-3">*/}
        {/*            {data.caregivers.slice(0, 3).map((caregiver, index) => (*/}
        {/*              <div*/}
        {/*                key={caregiver.id}*/}
        {/*                className="w-8 h-8 rounded-full border-2 border-white relative overflow-hidden"*/}
        {/*                style={{ zIndex: 3 - index }}*/}
        {/*              >*/}
        {/*                <Image*/}
        {/*                  src={caregiver.profileImage || "/placeholder.svg"}*/}
        {/*                  alt={`Caregiver ${index + 1}`}*/}
        {/*                  width={32}*/}
        {/*                  height={32}*/}
        {/*                  className="object-cover"*/}
        {/*                />*/}
        {/*              </div>*/}
        {/*            ))}*/}
        {/*          </div>*/}
        {/*          {data.caregivers.length > 3 && (*/}
        {/*            <span className={`ml-1 text-tagline ${styles.title}`}>+{data.caregivers.length - 3}</span>*/}
        {/*          )}*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className={`px-2 py-1 rounded text-tagline ${styles.time} inline-block w-fit`}>*/}
        {/*      {data.startTime} - {data.endTime}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    )
  } else {
    // Caregiver/Client View
    const client = agencyData.clients[data.clientId]
    const caregiver = agencyData.caregivers[data.caregiverId]
    const displayPerson = view === "caregiver" ? client : caregiver

    return (
      <div
        className={` absolute left-0 right-0  rounded-lg p-2 
          transition-all duration-300 ease-in-out transform hover:scale-105 
          hover:shadow-lg hover:z-10 cursor-pointer ${styles.wrapper}`}
        style={{
          top: `${top}px`,
          height: `${height}px`,
          minHeight: isLessThanTwoHours ? "30px" : "80px",
        }}
      >
        <div className={` flex flex-col justify-between items-start h-full ${styles.content}`}>
          <div className={`${styles.content}`}>
            {!isLessThanTwoHours && (
                <Image
                    src={displayPerson.profileImage || "/placeholder.svg"}
                    alt={displayPerson.name}
                    width={isExactlyTwoHours ? 32 : duration <= 4 ? 32 : 32}
                    height={isExactlyTwoHours ? 32 : duration <= 4 ? 32 : 32}
                    className={`rounded-small object-cover ${styles.image}`}
                />
            )}
            <div className={`flex flex-col ${styles.container}`}>
              <div className={styles.title} title={displayPerson.name}>
                <span className="font-semibold">{truncateText(displayPerson.name, 12 )}</span>
              </div>
              {!isLessThanTwoHours && (
                  <span className={styles.location} title={client.location}>
                {truncateText(client.location, 20)}
              </span>
              )}
            </div>
          </div>

          {!isLessThanTwoHours && (
            <div className={`p-2 rounded text-xsmall-text w-full text-center ${styles.button}`}>
              <span className={styles.button}> {data.startTime} - {data.endTime} </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

