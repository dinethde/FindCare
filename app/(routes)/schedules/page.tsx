import { Calendar } from "@/components/schedule/Calendar"
import { weeklyData } from "@/data/schedule/CalendarData"
import { caregiverWeeklyData } from "@/data/schedule/CaregiverCalendarData"
import { clientWeeklyData } from "@/data/schedule/CilentCalendarData"

export default function SchedulePage() {
  return (
    <div className="bg-gray-50">
        <div className="max-w-[1200px] mx-auto space-y-8">
            {/* Care Provider Calendar Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Care Provider View</h2>
                <Calendar calendarData={weeklyData} />
            </div>
            {/* Caregiver Calendar Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Caregiver View</h2>
                <Calendar calendarData={caregiverWeeklyData} />
            </div>
            {/* Client Calendar Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Client View</h2>
                <Calendar calendarData={clientWeeklyData} />
            </div>
        </div>
    </div>
  );
}
