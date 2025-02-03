"use client";

import Image from "next/image";
import "../globals.css";
import Card from "../components/Card";
import { AgencyGrowthChart } from "@/components/ui/agency-growth-chart";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="w-full relative flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1.25rem] text-neutral-colors-neutral-11 font-small-text">
          <div className="w-full flex gap-4 ">
            <Card
              revenue={560000}
              selectedMonth="oct-2024"
              onMonthChange={(month) => console.log(month)}
            />

            <Card
              revenue={560000}
              title="Total Caregivers"
              selectedMonth="oct-2024"
              onMonthChange={(month) => console.log(month)}
              color="#FF2D55"
            />

            <Card
              revenue={560000}
              title="Total Clinets"
              selectedMonth="oct-2024"
              onMonthChange={(month) => console.log(month)}
              color="#007AFF"
            />

            <Card
              revenue={560000}
              title="Total Shifts"
              selectedMonth="oct-2024"
              onMonthChange={(month) => console.log(month)}
              color="#FF2D55"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex w-full">
          <AgencyGrowthChart />
        </div>
        <div className="flex w-4/5">
          <AgencyGrowthChart />
        </div>
      </div>
    </div>
  );
}
