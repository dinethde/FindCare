"use client";
import {
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  type TooltipProps,
  AreaChart,
} from "recharts";
import type { GrowthDataPoint } from "@/types/growthTypes";

import { CHART_CONFIG, growthData } from "@/data/growthData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { colorProps } from "@/data/ColorProps";
import SelectTime from "../cards/SelectTime";

// Custom tooltip component with coordinate props
const CustomTooltip = ({
  active,
  payload,
  coordinate,
}: TooltipProps<number, string> & {
  coordinate?: { x: number; y: number };
}) => {
  if (active && payload && payload.length && coordinate) {
    const data = payload[0].payload as GrowthDataPoint;
    return (
      <div
        className="w-40 absolute rounded-lg border bg-card p-3 shadow-lg"
        style={{
          left: coordinate.x,
          top: coordinate.y - 10,
          transform: "translate(-50%, -100%)",
        }}
      >
        <p className="mb-2 text-regular-text-thicker">{data.month}</p>
        <div className="space-y-1">
          <p className="text-small-text  text-muted-foreground ">
            Revenue:{" "}
            <span className="text-tagline text-neutral-12 ">
              ${data.revenue.toLocaleString()}
            </span>
          </p>
          <p className="text-small-text text-muted-foreground ">
            Profit:{" "}
            <span className="text-tagline text-neutral-12 ">
              ${data.profit.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

type GrowthChartProps = {
  height?: number;
};

export function GrowthChart({ height = 250 }: GrowthChartProps) {
  // Custom tick formatter to only show Jan and Dec
  const formatXAxis = (tickItem: string) => {
    return tickItem === "Jan" || tickItem === "Dec" ? tickItem : "";
  };

  return (
    <Card className="w-full big-card shadow-md">
      <CardHeader className="flex flex-row items-center justify-between p-0 ">
        <CardTitle className="text-h6">{CHART_CONFIG.title}</CardTitle>
        <SelectTime />
      </CardHeader>
      <CardContent className="p-0">
        <div className={`relative h-[${height}px] w-full -mt-2`}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={growthData}
              margin={{ left: 20, right: 20, top: 10, bottom: 5 }}
            >
              <defs>
                <linearGradient
                  id="areaGradientOrange"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={colorProps.orange.hsl}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor={colorProps.orange.hsl}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                stroke={colorProps.brand.hex}
                tickLine={false}
                axisLine={false}
                tickFormatter={formatXAxis}
                tickMargin={8} // Added tickMargin to increase space between ticks and axis
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
                position={{ x: 0, y: 0 }}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke={colorProps.orange.hsl}
                strokeWidth={2}
                fill="url(#areaGradientOrange)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className=" text-small-text text-muted-foreground text-neutral-8 mt-3">
          <span className="leading-[1.5em]">{CHART_CONFIG.subtitle}</span>
        </p>
      </CardContent>
    </Card>
  );
}
