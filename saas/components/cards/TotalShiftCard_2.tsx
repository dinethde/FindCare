"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";
import { useState, useEffect } from "react";
import type { ChartData, DataItem, TimeOption } from "@/types/pie-chart/types";
import SelectTime from "./SelectTime";

// ViewBox interface for the pie chart label
interface ViewBox {
  cx: number;
  cy: number;
}

// Tooltip payload interface
interface TooltipPayload {
  payload: DataItem & { color: string };
}

/**
 * Renders the label in the center of the pie chart
 * @param {Object} viewBox - The viewBox object from the SVG
 * @param {number} total - The total value to display
 * @param {string} title - The title to display below the total
 * @returns {JSX.Element} The label JSX
 */
const PieChartLabel = ({
  viewBox,
  total,
  title,
}: {
  viewBox: ViewBox;
  total: number;
  title: string;
}) => {
  const { cx, cy } = viewBox;
  const maxWidth = 80;
  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        className="text-h4 text-neutral-10"
        dominantBaseline="middle"
      >
        {total}
      </text>
      <foreignObject
        x={cx - maxWidth / 2}
        y={cy + 5}
        width={maxWidth}
        height="20"
      >
        <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
          <p className="text-tagline text-neutral-7">{title}</p>
        </div>
      </foreignObject>
    </g>
  );
};

/**
 * Renders a custom tooltip for the pie chart
 * @param {boolean} active - Whether the tooltip is active
 * @param {Array} payload - The data payload for the tooltip
 * @returns {JSX.Element|null} The tooltip JSX or null if not active
 */
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white rounded-lg border border-n3 shadow-md p-2">
        <div className="font-jura font-semibold text-neutral-8 text-sm">
          {data.name}
        </div>
        <div className="text-tagline text-neutral-10">
          <span className="font-semibold">{data.value}</span>
        </div>
      </div>
    );
  }
  return null;
};

/**
 * Renders the legend for the pie chart
 * @param {DataItem[]} data - Array of data items to display in the legend
 * @returns {JSX.Element} The legend JSX
 */
const Legend = ({ data }: { data: DataItem[] }) => (
  <div className="flex flex-wrap justify-center gap-3 py-2 px-4 bg-gray-50">
    {data.map((item, index) => (
      <div key={index} className="flex items-center gap-1">
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-tagline text-neutral-9">
          {item.value} {item.name}
        </span>
      </div>
    ))}
  </div>
);

/**
 * Renders a card containing a pie chart with shift or performance data
 * @param {ChartData} props - The data and options for the chart
 * @returns {JSX.Element} The TotalShiftsCard component JSX
 */
export function TotalShiftsCard({
  data,
  title,
  total,
  timeOptions,
  isCaptionVisible = true,
}: ChartData) {
  // State for managing the selected time period
  const [selectedTime, setSelectedTime] = useState(timeOptions[0].value);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render the chart on the server
  if (!isMounted) {
    return (
      <Card className="h-full big-card flex flex-col justify-between rounded-xl shadow-sm overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between p-0 bg-gray-50 text-neutral-10">
          <CardTitle className="text-h6 "> {title}</CardTitle>
          <div className="w-[100px] h-[30px]"></div>
        </CardHeader>
        <CardContent className="flex flex-col items-center p-0">
          <div className="h-[250px] w-[250px] mx-auto relative"></div>
        </CardContent>
        {isCaptionVisible && (
          <div className="flex flex-wrap justify-center gap-3 py-2 px-4 bg-gray-50 h-[40px]"></div>
        )}
      </Card>
    );
  }

  return (
    <Card className="h-full big-card flex flex-col justify-between rounded-xl shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-0 bg-gray-50 text-neutral-10">
        <CardTitle className="text-h6 "> {title}</CardTitle>

        <SelectTime
          selectedYear={selectedTime}
          setSelectedYear={setSelectedTime}
          data={timeOptions}
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center p-0">
        <div className="h-[250px] w-[250px] mx-auto relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={0}
                cornerRadius={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  content={(props) => (
                    <PieChartLabel {...props} total={total} title={title} />
                  )}
                  position="center"
                />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      {isCaptionVisible && <Legend data={data} />}
    </Card>
  );
}
