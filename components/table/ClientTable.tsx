"use client";

import { DynamicTable } from "./DynamicTable";
import { clientData } from "@/data/TableData";
import type { TableConfig } from "@/types/TableTypes";

const clientConfig: TableConfig = {
  title: "Client List",
  columns: [
    { key: "name", header: "Name", width: "15%" },
    { key: "contactInfo", header: "Schedule", width: "25%" },
    { key: "careType", header: "Care Type", width: "15%" },
    { key: "primaryCaregiver", header: "Primary caregiver", width: "20%" },
    { key: "location", header: "location", width: "12%" },
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

export function ClientTable() {
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
