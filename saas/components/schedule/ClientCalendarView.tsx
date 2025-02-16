import { Calendar } from "./Calendar";
import type { AgencyData } from "@/types/ScheduleTypes";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardSmall from "@/components/cards/Card";

interface ClientCalendarViewProps {
  agencyData: AgencyData;
  selectedClientId: string;
}

export function ClientCalendarView({
  agencyData,
  selectedClientId,
}: ClientCalendarViewProps) {
  // Find primary caregiver (for demo, using first caregiver)
  const primaryCaregiver = Object.values(agencyData.caregivers)[0];

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
