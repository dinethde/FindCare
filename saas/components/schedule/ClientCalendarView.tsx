import { Calendar } from "./Calendar";
import type { AgencyData } from "@/types/ScheduleTypes";

interface ClientCalendarViewProps {
  agencyData: AgencyData;
  selectedClientId: string;
}

export function ClientCalendarView({
  agencyData,
  selectedClientId,
}: ClientCalendarViewProps) {
  // Find primary caregiver (for demo, using first caregiver)
  // const primaryCaregiver = Object.values(agencyData.caregivers)[0];

  return (
    <div className="flex gap-4">
      <div className="w-full">
        <Calendar
          agencyData={agencyData}
          view="client"
          selectedId={selectedClientId}
        />
      </div>
    </div>
  );
}
