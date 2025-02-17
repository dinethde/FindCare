"use client";

import SelectTime from "@/components/cards/SelectTime";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Month } from "@/types/SelectTimeTypes";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";

interface TotalShiftsCardProps {
  total: number;
  late: number;
  cancelled: number;
  title?: string;
}

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export function TotalShiftsCard({
  total,
  late,
  cancelled,
  title = "Total Shifts",
}: TotalShiftsCardProps) {
  const data = [
    { name: "Complete", value: total - late - cancelled },
    { name: "Late", value: late },
    { name: "Cancelled", value: cancelled },
  ];

  const COLORS = ["#FF4500", "#007AFF", "#FFB800"];
  sel;

  return (
    <Card className="h-full big-card flex flex-col justify-between">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between p-0">
        {/* Heading 6 */}
        <CardTitle className="text-h6">{title}</CardTitle>
        {/* Select time dropdown */}
        <div className="">
          <SelectTime data={months} />
        </div>
      </CardHeader>
      {/* Card content */}
      <CardContent className="flex flex-col items-center p-0">
        <div className="h-[280px] w-full mx-auto relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox;
                    return (
                      <>
                        <text
                          x={cx}
                          y={cy - 10}
                          textAnchor="middle"
                          className="text-h3 font-bold"
                          dominantBaseline="middle"
                        >
                          {total}
                        </text>
                        <text
                          x={cx}
                          y={cy + 15}
                          textAnchor="middle"
                          className="text-tagline fill-neutral-8"
                          dominantBaseline="middle"
                        >
                          {title}
                        </text>
                      </>
                    );
                  }}
                  position="center"
                />
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="rounded-lg border bg-white p-2 shadow-sm relative z-50">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="font-medium">{data.name} shifts</div>
                          <div className="font-medium">{data.value}</div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#007AFF]" />
          <span className="text-sm text-gray-600">{late} late shifts</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FFB800]" />
          <span className="text-sm text-gray-600">
            {cancelled} cancelled shifts
          </span>
        </div>
      </div>
    </Card>
  );
}
