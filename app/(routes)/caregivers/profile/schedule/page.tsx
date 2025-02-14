import React from "react";
import { CaregiverCalendarView } from "@/components/CaregiverCalendarView";
import { agencyData } from "@/data/AgencyData";
import { ClientChildTable } from "@/components/table/ClientChildTable";

export default function SchedulePage() {
  const selectedCaregiverId = Object.keys(agencyData.caregivers)[0];
  const selectedCaregiver = agencyData.caregivers[selectedCaregiverId];

  return (
    <div>
      <div className="space-y-10">
        <CaregiverCalendarView
          agencyData={agencyData}
          selectedCaregiverId={selectedCaregiverId}
        />
        <div className="space-y-4">
          <h3 className="text-h5 ml-2 text-neutral-11">Filled a Spot</h3>
          <ClientChildTable />
        </div>
      </div>
    </div>
  );
}
