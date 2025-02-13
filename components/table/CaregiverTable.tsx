import { DynamicTable } from "./DynamicTable";
import { caregiverData } from "../../data/TableData";
import type { TableConfig } from "../../types/TableTypes";

const caregiverConfig: TableConfig = {
  title: "Caregiver List",
  columns: [
    { key: "name", header: "Name", width: "15%" },
    { key: "contactInfo", header: "Contact info", width: "25%" },
    { key: "careType", header: "Care Type", width: "15%" },
    { key: "rate", header: "Rate", width: "12%" },
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
