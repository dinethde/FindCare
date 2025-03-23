/**
 * @fileoverview Schedule Page Component
 * Displays the care provider scheduling dashboard with calendar integration
 */

import { CareProviderDashboard } from "@/components/schedule/CareProviderDashboard";
import { agencyData } from "@/data/AgencyData";
import { type ReactElement } from 'react';

/**
 * Schedule page component that renders the care provider dashboard
 * @returns {ReactElement} The rendered schedule page component
 */
export default function SchedulePage(): ReactElement {
  return (
    <div className="bg-gray-50">
      <div className="w-full space-y-9">
        {/* Care Provider Calendar Section */}
        <CareProviderDashboard agencyData={agencyData} />
      </div>
    </div>
  );
}