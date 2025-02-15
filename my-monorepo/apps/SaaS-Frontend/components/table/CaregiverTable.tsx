import { DynamicTable } from "./DynamicTable";
import { caregiverData } from "../../data/TableData";
import type { TableConfig } from "../../types/TableTypes";

interface CaregiverTableProps {
  caregiverConfig: TableConfig;
  tableType: string;
  filterOptions: Array<{
    key: string;
    label: string;
    type: "text" | "number" | "checkbox";
    options?: string[];
  }>;
}

export function CaregiverTable({
  tableType,
  caregiverConfig,
  filterOptions,
}: CaregiverTableProps) {

  return (
    <DynamicTable
      config={caregiverConfig}
      data={caregiverData}
      filterOptions={filterOptions}
      tableType={tableType}
    />
  );
}
