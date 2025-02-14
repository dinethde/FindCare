"use client";

import { DynamicTable } from "./DynamicTable";
import { clientData } from "@/data/TableData";
import type { TableConfig } from "@/types/TableTypes";

const clientConfig: TableConfig = {
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

const filterOptions = [
  { key: "name", label: "Name", type: "text" },
  {
    key: "careType",
    label: "Care Type",
    type: "checkbox",
    options: ["Domici Care", "Senior Care", "Child Care"],
  },
  { key: "location", label: "Location", type: "text" },
];

export function ClientChildTable() {
  const handleSearch = (query: string) => {
    console.log("Searching:", query);
  };

  return (
    <DynamicTable
      config={clientConfig}
      data={clientData}
      onSearch={handleSearch}
      filterOptions={filterOptions}
    />
  );
}
