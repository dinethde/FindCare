"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { agencyGrowthData } from "@/data/agency-growth";
import type { AgencyGrowthData } from "@/types/chart";

export function AgencyGrowthChart() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const currentYearData =
    agencyGrowthData.find((d) => d.year === selectedYear)?.data || [];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-h6 font-normal">Agency Growth</CardTitle>

        <div className="text-grey">
          <Select
            defaultValue={selectedYear.toString()}
            onValueChange={(value) => setSelectedYear(Number.parseInt(value))}
          >
            <SelectTrigger className="w-[100px] bg-[#E8EBEE] text-tagline">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="text-grey">
              {agencyGrowthData.map((yearData) => (
                <SelectItem
                  key={yearData.year}
                  value={yearData.year.toString()}
                >
                  {yearData.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={currentYearData}
              margin={{
                top: 5,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6600" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#FF6600" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666" }}
                domain={[0, 10]}
                ticks={[0, 5, 10]}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as AgencyGrowthData;
                    return (
                      <div className="rounded-lg bg-white p-2 shadow-lg">
                        <p className="text-sm text-gray-600">{data.month}</p>
                        <p className="font-medium text-gray-900">
                          {data.total} Clients
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#FF6600"
                strokeWidth={2}
                fill="url(#areaGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
