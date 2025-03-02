import { CareProviderDashboard } from "@/components/schedule/CareProviderDashboard";
import { agencyData } from "@/data/AgencyData";
import { ClientTable } from "@/components/table/ClientTable";
import type { TableConfig } from "@/types/TableTypes";

export default function SchedulePage() {
  return (
    <div className="bg-gray-50">
      <div className="w-full space-y-9">
        {/* Care Provider Calendar Section */}

        <CareProviderDashboard agencyData={agencyData} />
      </div>
    </div>
  );
}
