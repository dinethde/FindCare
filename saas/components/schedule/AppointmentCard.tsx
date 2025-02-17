import Image from "next/image";
import type { Appointment, AgencyData } from "@/types/ScheduleTypes";
import { calculateEventPosition } from "@/utils/TimeUtils";

interface AppointmentCardProps {
  data: Appointment;
  view: "care-provider" | "caregiver" | "client";
  agencyData: AgencyData;
  isSelected?: boolean;
}

export function AppointmentCard({
  data,
  view,
  agencyData,
  isSelected,
}: AppointmentCardProps) {
  const { top, height } = calculateEventPosition(data.startTime, data.endTime);

  // Calculate duration in hours
  const startHour = Number.parseInt(data.startTime.split(":")[0]);
  const startMinute = Number.parseInt(data.startTime.split(":")[1]);
  const endHour = Number.parseInt(data.endTime.split(":")[0]);
  const endMinute = Number.parseInt(data.endTime.split(":")[1]);
  const duration = endHour - startHour + (endMinute - startMinute) / 60;

  const isExactlyTwoHours = duration === 2;
  const isLessThanTwoHours = duration < 2;

  console.log("two hours " + isExactlyTwoHours);

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
          };
    } else {
      // Caregiver/Client styles
      if (isLessThanTwoHours) {
        return {
          wrapper: "bg-brand-colors-brand3 text-white",
          content: "flex-col justify-between h-full",
          title: "text-regular-text font-bold truncate",
          button: "hidden",
        };
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
        };
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
        };
      }
      return {
        wrapper: "bg-[#FFF5E6] border-2 border-brand-colors-brand5",
        content: "flex-col items-start gap-2",
        title: "text-regular-text text-brand-colors-brand2 truncate max-w-full",
        location: "text-tagline text-brand-colors-brand3 truncate max-w-full ",
        image: "block w-10 h-10",
        container: "w-full",
        button: "bg-brand-colors-brand2 text-white font-bold ",
      };
    }
  };

  const styles = getStyles();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 1) + "…";
  };

  if (view == "care-provider") {
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
      </div>
    );
  } else {
    // Caregiver/Client View
    const client = agencyData.clients[data.clientId];
    const caregiver = agencyData.caregivers[data.caregiverId];
    const displayPerson = view === "caregiver" ? client : caregiver;

    return (
      <div
        className={` absolute left-0 right-0  rounded-lg p-[6px]
          transition-all duration-300 ease-in-out transform hover:scale-105 
          hover:shadow-lg hover:z-10 cursor-pointer ${styles.wrapper}`}
        style={{
          top: `${top}px`,
          height: `${height}px`,
          minHeight: isLessThanTwoHours ? "30px" : "80px",
        }}
      >
        <div
          className={` flex flex-col justify-between items-start h-full ${styles.content}`}
        >
          <div className={`${styles.content} space-y-1`}>
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
                <span className="font-semibold">
                  {truncateText(displayPerson.name, 12)}
                </span>
              </div>
              {!isLessThanTwoHours && (
                <span className={styles.location} title={client.location}>
                  {truncateText(client.location, 20)}
                </span>
              )}
            </div>
          </div>

          {!isLessThanTwoHours && (
            <div
              className={`p-2 rounded text-xsmall-text w-full text-center ${styles.button}`}
            >
              <span className={styles.button}>
                {data.startTime} - {data.endTime}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
