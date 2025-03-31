import CaregiverProfile from "@/components/CaregiverProfile"
import { caregiverData } from "@/data/caregiver_data"

export default function MobileAppPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full grid grid-cols-[1.5fr_.5fr] gap-4 ">
        <div className="w-full bg-grey-darker h-[4000px]">

        </div>
        <div className="w-[400px] sticky top-4 bg-white rounded-lg shadow-md max-h-[700px] overflow-y-scroll">
          <CaregiverProfile caregiver={caregiverData} />
        </div>
      </div>
    </div>
  )
}

