import { WeeklyCalendar } from "@/components/schedule/WeeklyCalendar";
import {CaregiverCalendar} from "@/components/schedule/CaregiverCalendar";

export default function SchedulePage() {
  return (
    <div className="bg-gray-50">
        <div className="max-w-[1200px] mx-auto space-y-8">
            {/* Care Provider Calendar Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Care Provider View</h2>
                <WeeklyCalendar />
            </div>
            {/* Caregiver Calendar Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Caregiver View</h2>
                <CaregiverCalendar />
            </div>
        </div>
    </div>
  );
}
