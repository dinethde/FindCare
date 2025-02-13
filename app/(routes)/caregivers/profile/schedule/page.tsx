import React from "react";
import {CaregiverCalendarView} from "@/components/CaregiverCalendarView";
import {agencyData} from "@/data/AgencyData";

export default function SchedulePage() {

  const selectedCaregiverId = Object.keys(agencyData.caregivers)[0]
  const selectedCaregiver = agencyData.caregivers[selectedCaregiverId]

  return <div>
    <div>
    <CaregiverCalendarView agencyData={agencyData} selectedCaregiverId={selectedCaregiverId} />
  </div>
  </div>;
}
