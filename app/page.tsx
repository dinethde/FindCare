import { BestCaregiversCard } from "@/components/best-caregivers-card"
import { TotalShiftsCard } from "@/components/total-shifts-card"
import { ActiveCaregiversCard } from "@/components/active-caregivers-card"
import { CareEfficiencyCard } from "@/components/care-efficiency-card"
import { caregivers, shiftStats, activeCaregiversStats, efficiencyData } from "@/data/mock-data"

export default function DashboardPage() {
  return (
    <div className="container mx-auto grid min-h-screen grid-cols-[1fr_0.65fr_1fr] gap-6 py-8">
      <div>
        <BestCaregiversCard caregivers={caregivers} />
      </div>
      <div>
        <TotalShiftsCard total={shiftStats.total} late={shiftStats.late} cancelled={shiftStats.cancelled} />
      </div>
      <div className="space-y-6">
        <ActiveCaregiversCard active={activeCaregiversStats.active} total={activeCaregiversStats.total} />
        <CareEfficiencyCard data={efficiencyData} />
      </div>
    </div>
  )
}

