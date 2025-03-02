import { ClientTable } from "@/components/table/ClientTable";
import { MatchesTable } from "@/components/table/MatchesTable";

import type { TableConfig } from "@/types/TableTypes";

export default function Page() {
  return (
    <div className="bg-[#ffffff] space-y-8">
      <MatchesTable />
    </div>
  );
}
