import { CareProviderDashboard } from "@/components/schedule/CareProviderDashboard";
import { agencyData } from "@/data/AgencyData";
import { ClientTable } from "@/components/table/ClientTable";
import type { TableConfig } from "@/types/TableTypes";

export default function SchedulePage() {
  // For demonstration purposes, we'll use the first caregiver and client
  const selectedCaregiverId = Object.keys(agencyData.caregivers)[0];

  const clientConfigWithTimes: TableConfig = {
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

  const clientConfigWithNOK: TableConfig = {
    title: "Client List",
    columns: [
      { key: "name", header: "Name", width: "15%" },
      { key: "contactInfo", header: "Contact info", width: "15%" },
      { key: "careType", header: "Care Type", width: "18%" },
      { key: "primaryCaregiver", header: "Primary Caregiver", width: "15%" },
      { key: "location", header: "locations", width: "10%" },
    ],
    headerAlignments: ["left", "center", "center", "center", "right"],
    showViewAction: true,
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
    <div className="bg-gray-50">
      <div className="w-full space-y-9">
        {/* Care Provider Calendar Section */}

          <CareProviderDashboard agencyData={agencyData} />


        <div className="flex flex-col gap-y-5">
          <h3 className="text-h4 text-neutral-10 pl-2"> Fill a Spot </h3>
          <div className="bg-[#ffffff] space-y-8">
            <ClientTable
                config={clientConfigWithTimes}
                filterOptions={filterOptions}
            />
            <ClientTable
                config={clientConfigWithNOK}
                filterOptions={filterOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
