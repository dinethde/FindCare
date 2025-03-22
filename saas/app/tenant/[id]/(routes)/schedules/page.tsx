import { CareProviderDashboard } from "@/components/schedule/CareProviderDashboard";
import { agencyData } from "@/data/AgencyData";

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
