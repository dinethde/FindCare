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
import { useState } from "react";
import type { ChartData, DataItem, TimeOption } from "@/types/pie-chart/types";

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
  viewBox: any;
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
  payload?: any[];
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
 * Renders a time period selector
 * @param {TimeOption[]} options - Array of time options
 * @param {string} value - Currently selected value
 * @param {function} onChange - Function to call when selection changes
 * @returns {JSX.Element} The time selector JSX
 */
const TimeSelector = ({
  options,
  value,
  onChange,
}: {
  options: TimeOption[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {/* Custom dropdown arrow */}
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
);

/**
 * Renders the legend for the pie chart
 * @param {DataItem[]} data - Array of data items to display in the legend
 * @returns {JSX.Element} The legend JSX
 */
const Legend = ({ data }: { data: DataItem[] }) => (
  <div className="mt-2 flex flex-wrap justify-center gap-3 py-2 px-4 bg-gray-50">
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
}: ChartData) {
  // State for managing the selected time period
  const [selectedTime, setSelectedTime] = useState(timeOptions[0].value);

  return (
    <Card className="h-full big-card flex flex-col justify-between rounded-xl shadow-lg overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between py-2 px-4 bg-gray-50">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {title}
        </CardTitle>
        <TimeSelector
          options={timeOptions}
          value={selectedTime}
          onChange={setSelectedTime}
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-2 px-4 pb-0">
        <div className="h-[220px] w-full mx-auto relative">
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
      <Legend data={data} />
    </Card>
  );
}
