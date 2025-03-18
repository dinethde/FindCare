import { ClientCalendarView } from "@/components/schedule/ClientCalendarView";
import { agencyData } from "@/data/AgencyData";
import React from "react";

export default function page() {
  const selectedClientId = Object.keys(agencyData.clients)[0];

  return (
    <div className=" mt-6">
      <ClientCalendarView
        agencyData={agencyData}
        selectedClientId={selectedClientId}
      />
    </div>
  );
}
