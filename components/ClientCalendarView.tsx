import { Calendar } from "./Calendar"
import type { AgencyData } from "../types/ScheduleTypes"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ClipboardList } from "lucide-react"

interface ClientCalendarViewProps {
  agencyData: AgencyData
  selectedClientId: string
}

export function ClientCalendarView({ agencyData, selectedClientId }: ClientCalendarViewProps) {
  // Find primary caregiver (for demo, using first caregiver)
  const primaryCaregiver = Object.values(agencyData.caregivers)[0]

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <Calendar agencyData={agencyData} view="client" selectedId={selectedClientId} />
      </div>
      <div className="w-80 flex flex-col gap-6">
        {/* Primary Caregiver Card */}
        <Card>
          <CardHeader>
            <CardTitle>Caregiver</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FFF5E6] border border-[#FF9966]">
              <Image
                src={primaryCaregiver.profileImage || "/placeholder.svg"}
                alt={primaryCaregiver.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-[#191919]">{primaryCaregiver.name}</div>
                <div className="text-sm text-gray-500">Id: CG1001</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Care Plan Card */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <ClipboardList className="w-5 h-5" />
            <CardTitle>Care Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Plan name :</span>
              <span className="font-medium">02/12/2022</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Price :</span>
              <span className="font-medium">02/12/2022</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Care hours :</span>
              <span className="font-medium">36</span>
            </div>
            <Separator />
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Interdum sed vitae aliquet eget.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

