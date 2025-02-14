"use client";

import { DynamicTable } from "./DynamicTable";
import { clientData } from "@/data/TableData";
import type { TableConfig } from "@/types/TableTypes";

interface ClientTableProps {
  config: TableConfig;
  tableType?: string;
  filterOptions: Array<{
    key: string;
    label: string;
    type: "text" | "number" | "checkbox";
    options?: string[];
  }>;
}

export function ClientTable({
  config,
  filterOptions,
  tableType,
}: ClientTableProps) {
  const tableConfig: TableConfig = {
    ...config,
  };

  return (
    <DynamicTable
      config={tableConfig}
      data={clientData}
      filterOptions={filterOptions}
      tableType={tableType}
    />
  );
}
