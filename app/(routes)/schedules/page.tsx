import { CareProviderDashboard } from "@/components/CareProviderDashboard";
import { agencyData } from "@/data/AgencyData";
import { CaregiverCalendarView } from "@/components/CaregiverCalendarView";
import { ClientCalendarView } from "@/components/ClientCalendarView";

export default function SchedulePage() {
  // For demonstration purposes, we'll use the first caregiver and client
  const selectedCaregiverId = Object.keys(agencyData.caregivers)[0];
  const selectedClientId = Object.keys(agencyData.clients)[0];

  const selectedCaregiver = agencyData.caregivers[selectedCaregiverId];

  return (
    <div className="bg-gray-50">
      <div className="w-full space-y-8">
        {/* Care Provider Calendar Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Care Provider View</h2>
          <CareProviderDashboard agencyData={agencyData} />
        </div>

        {/* <div>
                <h2 className="text-2xl font-semibold mb-4">Client Calendar</h2>
                <ClientCalendarView agencyData={agencyData} selectedClientId={selectedClientId} />
            </div> */}
      </div>
    </div>
  );
}
