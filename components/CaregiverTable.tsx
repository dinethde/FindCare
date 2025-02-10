import { DynamicTable } from "./DynamicTable";
import { caregiverData } from "../data/TableData";
import type { TableConfig } from "../types/TableTypes";

const caregiverConfig: TableConfig = {
  title: "Caregiver List",
  columns: [
    { key: "name", header: "Name", width: "18%" },
    { key: "contactInfo", header: "Contact info", width: "20%" },
    { key: "careType", header: "Care Type", width: "15%" },
    { key: "rate", header: "Rate", width: "10%" },
    { key: "location", header: "location", width: "15%" },
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

export function CaregiverTable() {
  const handleSearch = (query: string) => {
    console.log("Searching:", query);
  };

  return (
    <DynamicTable
      config={caregiverConfig}
      data={caregiverData}
      onSearch={handleSearch}
      filterOptions={filterOptions}
    />
  );
}
