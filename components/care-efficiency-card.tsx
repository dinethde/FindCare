"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { EfficiencyData } from "../types/dashboard";
import SelectTime from "@/app/components/SelectTime";
import { Month } from "@/types/SelectTimeTypes";

interface CareEfficiencyCardProps {
  data: EfficiencyData[];
}

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export function CareEfficiencyCard({ data }: CareEfficiencyCardProps) {
  return (
    <Card className="h-full big-card flex flex-col gap-4 relative">
      <CardHeader className="p-0 mt-2">
        <div className="flex justify-between">
          <CardTitle className="text-h6 ">All Time Care efficiency</CardTitle>
          <SelectTime data={months} />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" hide />
              <YAxis hide domain={[60, 100]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-white p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="font-medium">Efficiency</div>
                          <div className="font-medium">
                            {payload[0].value.toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#007AFF"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <p className="text-sm text-gray-500 absolute bottom-4">
        Care efficiency has down 5% this month
      </p>
    </Card>
  );
}
