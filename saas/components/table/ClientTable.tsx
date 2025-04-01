"use client";

import { DynamicTable } from "./DynamicTable";
import { clientData } from "@/data/TableData";
import type { TableConfig, Client } from "@/types/TableTypes";

interface ClientTableProps {
  config: TableConfig<Client>;
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
  const tableConfig: TableConfig<Client> = {
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
