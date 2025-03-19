"use client";

import Card from "@/components/cards/Card";
import SatisfactionGauge from "@/components/charts/GaugeChart";
import { GrowthChart } from "@/components/charts/growth-chart";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";

export default function Home() {
  const tenantId = useParams().id;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="w-full relative flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1.25rem] text-neutral-colors-neutral-11 font-small-text">
          <div className="w-full flex gap-4 ">

            <Card revenue={560000} color={"#FF4B00"} />

            <Card
              title="Total Shifts"
              revenue={"120/"}
              dataType={`100`}
              dataTypeClassName="text-[18px] font-medium text-neutral-8"
              contentClassName="text-h4"
            />

            <Card
              revenue={24}
              dataType=""
              title="Total Caregivers"
              color="#FF2D55"
            />

            <Card
              revenue={36}
              dataType=""
              title="Total Clients"
              color="#007AFF"
            />

          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_0.75fr] gap-4">
        <GrowthChart />
        <SatisfactionGauge
          value={95}
          date="Oct 2024"
          title="Agency's Satisfaction Rate"
        />
      </div>
      <div className="flex min-h-screen items-center justify-center p-4 bg-background"></div>
    </div>
  );
}
