import React from "react";
import { CaregiverCalendarView } from "@/components/schedule/CaregiverCalendarView";
import { agencyData } from "@/data/AgencyData";
import { ClientTable } from "@/components/table/ClientTable";
import { TableConfig, Client } from "@/types/TableTypes";

export default function SchedulePage() {
  const selectedCaregiverId = Object.keys(agencyData.caregivers)[0];

  const clientConfig: TableConfig<Client> = {
    title: "Client List ",
    columns: [
      { key: "name", header: "Name", width: "20%" },
      { key: "careType", header: "Care Type", width: "20%" },
      { key: "primaryCaregiver", header: "Primary caregiver", width: "20%" },
      { key: "location", header: "location", width: "20%" },
      { key: "assignedTimes", header: "Assigned Times", width: "20%" },
    ],
    headerAlignments: ["left", "center", "center", "center", "right"],
  };

  interface FilterOption {
    key: string;
    label: string;
    type: "number" | "text" | "checkbox";
    options?: string[];
  }

  const filterOptions: FilterOption[] = [
    { key: "name", label: "Name", type: "text" },
    {
      key: "careType",
      label: "Care Type",
      type: "checkbox",
      options: ["Domici Care", "Senior Care", "Child Care"],
    },
    { key: "location", label: "Location", type: "text" },
  ];
  return (
    <div>
      <div className="space-y-8 mt-6">
        <CaregiverCalendarView
          agencyData={agencyData}
          selectedCaregiverId={selectedCaregiverId}
        />
        <div className="space-y-4">
          <h3 className="text-h5 ml-2 text-neutral-11">Filled a Spot</h3>
          <ClientTable config={clientConfig} filterOptions={filterOptions} />
        </div>
      </div>
    </div>
  );
}
