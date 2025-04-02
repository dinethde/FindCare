import CaregiverProfile from "@/components/CaregiverProfile"
import { caregiverData } from "@/data/caregiver_data"

export default function CaregiverMobileAppView() {
    return (
        <div className="w-[400px] sticky top-4 bg-white rounded-lg shadow-md max-h-[700px] overflow-y-scroll">
            <CaregiverProfile caregiver={caregiverData[0]} />
        </div>
    )
}