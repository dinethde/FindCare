import { ClientTable } from "@/components/table/ClientTable";
import { Client, TableConfig } from "@/types/TableTypes";
import React from "react";

export default function page() {
  // Removed unused variable clientConfigWithTimes

  const clientConfigWithNOK: TableConfig<Client> = {
    title: "Client List",
    columns: [
      { key: "name", header: "Name", width: "16%" },
      { key: "contactInfo", header: "Contact info", width: "18%" },
      { key: "careType", header: "Care Type", width: "20%" },
      { key: "primaryCaregiver", header: "Primary Caregiver", width: "18%" },
      { key: "location", header: "locations", width: "12%" },
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
    <div>
      <div className="flex flex-col gap-y-5">
        <div className="bg-[#ffffff] space-y-8">
          <ClientTable
            config={clientConfigWithNOK}
            filterOptions={filterOptions}
            tableType="fill"
          />
        </div>
      </div>
    </div>
  );
}
