import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

interface ActiveCaregiversCardProps {
  active: number
  total: number
}

export function ActiveCaregiversCard({ active, total }: ActiveCaregiversCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-bold">Active Caregivers</CardTitle>
        <div className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-500">Oct 2024</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-orange-100 p-3">
            <Users className="h-6 w-6 text-orange-500" />
          </div>
          <div className="text-4xl font-bold">
            {active}
            <span className="text-gray-400">/{total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

