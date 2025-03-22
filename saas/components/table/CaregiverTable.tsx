import { DynamicTable } from "./DynamicTable";
import { caregiverData } from "../../data/TableData";
import type { TableConfig } from "../../types/TableTypes";
import { Caregiver } from "../../types/TableTypes";

interface CaregiverTableProps {
  caregiverConfig: TableConfig;
  tableType: string;
  filterOptions: Array<{
    key: string;
    label: string;
    type: "text" | "number" | "checkbox";
    options?: string[];
  }>;
  data?: Caregiver[]; // Add data as an optional prop
  profilePath?: string; // Add profilePath as an optional prop for navigation
}

export function CaregiverTable({
  tableType,
  caregiverConfig,
  filterOptions,
  data, // Receive the data from the parent component
  profilePath = "", // Default to empty string if not provided
}: CaregiverTableProps) {
  // If no data is provided, fall back to the mock data
  const tableData = data || caregiverData;

  return (
    <DynamicTable
      config={caregiverConfig}
      data={tableData}
      filterOptions={filterOptions}
      tableType={tableType}
      profilePath={profilePath} // Pass the profilePath to DynamicTable
    />
  );
}
