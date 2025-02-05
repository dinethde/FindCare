import Image from "next/image";
import photo from "../../../public/images/photo.png";
import BestCaregiverCard from "@/app/components/BestCaregiverCard";
import Card from "@/app/components/Card";
import { AgencyGrowthChart } from "@/app/components/agency-growth-chart";
import TotalShiftsCard from "@/app/components/TotalShiftsCard";
import PieChart from "../../components/PieChart";

export default function CaregiverPage() {
  return (
    <div>
      <div>
        <div>
          <div
            className="
            w-full relative grid 
            grid-cols-[1fr_0.65fr_0.9fr] gap-4 items-start justify-start text-neutral-colors-black "
          >
            {/* Column One */}
            <div>
              <BestCaregiverCard />
            </div>

            {/* Column Two */}
            <div className="h-full">
              {/* <TotalShiftsCard /> */}
              <PieChart />
            </div>
            {/* Column Three */}
            <div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem]">
                <Card revenue={2024} title="Active Caregivers" />
                <AgencyGrowthChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
