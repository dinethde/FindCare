"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Caregiver } from "../types/dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import SelectTime from "@/components/SelectTime";
import { Month } from "@/types/CardTypes";
import CaregiverRow from "./CaregiverRow";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

interface BestCaregiversCardProps {
  caregivers: Caregiver[];
}

export function BestCaregiversCard({ caregivers }: BestCaregiversCardProps) {
  const [selectedCaregiver, setSelectedCaregiver] = useState<Caregiver>(
    caregivers[0]
  );

  const satisfactionData = [
    { name: "Satisfaction", value: selectedCaregiver.stats.satisfaction },
    { name: "Remaining", value: 100 - selectedCaregiver.stats.satisfaction },
  ];

  return (
    <Card className=" big-card flex flex-col gap-4 h-full ">
      {/* card header */}
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <CardTitle className="text-h6">Best Caregivers</CardTitle>
        <div className="rounded-md bg-gray-100 text-sm text-gray-500">
          <SelectTime data={months} />
        </div>
      </CardHeader>
      {/* Card content */}
      <CardContent className="p-0">
        <div className="flex gap-4">
          {/* Table */}
          <div className="w-2/3 flex flex-col gap-2">
            {/* Table header */}
            <div className="grid grid-cols-2 text-small-text text-gray-500 ">
              <span className="text-neutral-7">Caregiver</span>
              <span className="text-neutral-7 text-right">clients</span>
              <span></span>
            </div>

            {/* Devider */}
            <div className="w-full relative border-lightgray border-t-[0.8px] border-solid box-border h-[0.05rem] mb-2" />

            {/* Table body */}
            <div className="p-0 flex flex-col gap-4">
              {caregivers.map((caregiver) => (
                <button
                  key={caregiver.id}
                  onClick={() => setSelectedCaregiver(caregiver)}
                  className={`w-full ${
                    selectedCaregiver.id === caregiver.id
                      ? "selected-table-row"
                      : ""
                  }`}
                >
                  <CaregiverRow caregiver={caregiver} />
                </button>
              ))}
            </div>
            {/* End of table body */}
          </div>
          {/* Chart */}
          <div className="w-1/2  pt-0 px-4 pb-4 ">
            <div className="rounded-lg bg-gray-50 p-0">
              <div className="h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={satisfactionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                    >
                      <Cell key="satisfaction" fill="#FF4500" />
                      <Cell key="remaining" fill="#E5E7EB" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold">
                    {selectedCaregiver.stats.satisfaction}%
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 -mt-1">
                <div className="text-regular-text-thicker text-center">
                  <span className="text-neutral-7 font-jura">
                    User satisfaction
                  </span>
                </div>
                <div className="flex flex-col gap-2 font-jura text-neutral-7">
                  <div className="flex justify-between text-sm ">
                    <span className="">Late arrivals :</span>
                    <span className="font-medium">
                      {selectedCaregiver.stats.lateArrivals}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="">Cancel Shifts :</span>
                    <span className="font-medium">
                      {selectedCaregiver.stats.cancelShifts}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="">Leave :</span>
                    <span className="font-medium">
                      {selectedCaregiver.stats.leave}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
