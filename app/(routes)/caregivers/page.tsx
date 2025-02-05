import { BestCaregiversCard } from "@/components/best-caregivers-card";
import { TotalShiftsCard } from "@/components/total-shifts-card";
import { ActiveCaregiversCard } from "@/components/active-caregivers-card";
import { CareEfficiencyCard } from "@/components/care-efficiency-card";
import {
  caregivers,
  shiftStats,
  activeCaregiversStats,
  efficiencyData,
} from "@/data/mock-data";
import Card from "@/app/components/Card";
import CaregiverList from "@/components/CaregiverList";

export default function CaregiverPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="container mx-auto grid grid-cols-[1.25fr_0.65fr_1fr] gap-4 p-0 m-0">
        {/* == Best caregiver card == */}
        <div>
          <BestCaregiversCard caregivers={caregivers} />
        </div>

        {/* == Total Shifts caregiver card == */}
        <div>
          <TotalShiftsCard
            total={shiftStats.total}
            late={shiftStats.late}
            cancelled={shiftStats.cancelled}
          />
        </div>

        <div className="flex flex-col gap-4">
          {/* == Card == */}
          <Card />
          {/* == Care afficeny Card plus chart  == */}
          <CareEfficiencyCard data={efficiencyData} />
        </div>
      </div>

      <div>
        <CaregiverList />
      </div>
    </div>
  );
}
