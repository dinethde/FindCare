import { Star, Clock, Users } from "lucide-react"
import Image from "next/image"

interface AgencyDetail {
  name: string
  logo: string
  reviews: number
  rating: number
  years: number
  caregivers: string
  responseRate: string
  responseTime: string
  verified: boolean
}

interface AgencyDetailsProps {
  agency: AgencyDetail
}

/**
 * Displays details about the agency
 */
export default function AgencyDetails({ agency }: AgencyDetailsProps) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-h5 text-neutral-11">Agency Details</h2>

      <div className="flex gap-8 bg-main border-[0.5px] border-neutral-5 rounded-lg p-6">
        <div className="flex flex-col gap-3">
          <div className=" rounded-full border-[0.5px] border-black relative">
            <Image src={"/placeholder"} alt="agency" width="140" height="140" className="rounded-full" />

            {agency.verified && (
              <div className="h-8 w-8 absolute bottom-4 right-0 z-10 bg-neutral-12 rounded-full">
                <Image src={agency.logo} alt="agency" width="32" height="32" className="rounded-full" />
              </div>
            )}

          </div>
          <h3 className="text-h4">FindCare</h3>
        </div>

        <div className="flex flex-col gap-4 text-start w-full">
          <div className="flex flex-col gap-1">
            <div className="text-h6 text-neutral-11">{agency.reviews}</div>
            <div className="text-xsmall-text text-neutral-7">Reviews</div>
          </div>

          <hr />

          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center">
              <div className="text-h6 text-neutral-11">{agency.rating.toFixed(1)}</div>
              <Star className="w-5 h-5 ml-1 fill-support-colors-color2 text-support-colors-color2" />
            </div>
            <div className="text-xsmall-text text-neutral-7">Rating</div>
          </div>

          <hr />

          <div className="flex flex-col gap-1 items-start">
            <div className="text-h6 text-neutral-11">{agency.years}</div>
            <div className="text-xsmall-text text-neutral-7">Years in the industry</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-small-text text-neutral-10">
        <div className="flex items-start">
          <Users className="w-4 h-4 mr-2" />
          {agency.caregivers}
        </div>
        <div className="flex items-start">
          <Clock className="w-4 h-4 mr-2" />
          Response rate: {agency.responseRate}
        </div>
        <div className="flex items-start">
          <Clock className="w-4 h-4 mr-2" />
          Responds {agency.responseTime}
        </div>
      </div>
    </div>
  )
}

