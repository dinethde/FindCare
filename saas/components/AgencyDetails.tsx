import { Star, Clock, Users } from "lucide-react"

interface AgencyDetail {
  name: string
  logo: string
  reviews: number
  rating: number
  years: number
  caregivers: string
  responseRate: string
  responseTime: string
}

interface AgencyDetailsProps {
  agency: AgencyDetail
}

/**
 * Displays details about the agency
 */
export default function AgencyDetails({ agency }: AgencyDetailsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Agency Details</h2>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-xl font-bold">{agency.reviews}</div>
          <div className="text-xs text-gray-500">Reviews</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center">
          <div className="flex items-center">
            <div className="text-xl font-bold mr-1">{agency.rating.toFixed(1)}</div>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
          <div className="text-xs text-gray-500">Rating</div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-xl font-bold">{agency.years}</div>
          <div className="text-xs text-gray-500">Years in the industry</div>
        </div>
      </div>

      <div className="flex items-center space-x-3 mt-6">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-red-500 flex items-center justify-center text-white font-bold">
          <span>F</span>
        </div>
        <div className="text-lg font-medium">{agency.name}</div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2" />
          {agency.caregivers}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Response rate: {agency.responseRate}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Responds {agency.responseTime}
        </div>
      </div>
    </div>
  )
}

