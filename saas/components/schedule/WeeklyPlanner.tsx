"use client";

import type React from "react";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  LabelList,
  CartesianGrid,
} from "recharts";

// Types
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface Appointment {
  day: DayOfWeek;
  start: number;
  end: number;
  name: string;
  type: string;
  time: string;
}

interface DayData {
  day: DayOfWeek;
  duration: number;
  offset: number;
  name?: string;
  type?: string;
  time?: string;
  start?: number;
  end?: number;
}

interface AppointmentLabelProps {
  x: number;
  y: number;
  width: number;
  height: number;
  value: DayData;
}

interface DayLabelProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}

// Constants and Data
const DAYS_OF_WEEK: DayOfWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const TIME_SLOTS = ["4am", "8am", "12pm", "4pm", "8pm", "12am", "4am"] as const;

const APPOINTMENTS: Appointment[] = [
  {
    day: "Monday",
    start: 4,
    end: 12,
    name: "Jayantha Silva",
    type: "Homecare",
    time: "04.00-12.00",
  },
  {
    day: "Tuesday",
    start: 8,
    end: 20,
    name: "Jayantha Silva",
    type: "Homecare",
    time: "08.00-20.00",
  },
  {
    day: "Wednesday",
    start: 10,
    end: 24.5,
    name: "Jayantha Silva",
    type: "Homecare",
    time: "10.00-00.30",
  },
  {
    day: "Saturday",
    start: 12,
    end: 20,
    name: "Jayantha Silva",
    type: "Homecare",
    time: "12.00-20.00",
  },
  {
    day: "Sunday",
    start: 12,
    end: 20,
    name: "Jayantha Silva",
    type: "Homecare",
    time: "12.00-20.00",
  },
];

// Utility Functions
const formatTime = (time: number): string => {
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes.toString().padStart(2, "0")}${ampm}`;
};

// Components
const AppointmentLabel: React.FC<AppointmentLabelProps> = ({
  x,
  y,
  width,
  height,
  value,
}) => {
  if (!value?.name) return null;

  return (
    <g>
      <foreignObject x={x} y={y} width={width} height={height}>
        <div className="flex h-full flex-col justify-between p-2 text-xs">
          <div>
            <div className="text-tagline text-brand-colors-main truncate">
              {value.name}
            </div>
            {/* <div className="text-muted-foreground truncate">{value.type}</div> */}
          </div>
          <div className="mt-auto">
            <div className="text-brand-colors-main text-tagline">
              {value.start !== undefined && value.end !== undefined && (
                <div className="flex flex-col gap-1">
                  <span>{formatTime(value.end)}</span>
                  <span>{formatTime(value.start)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

const DayLabel: React.FC<DayLabelProps> = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <rect
      x={-50}
      y={0}
      width={100}
      height={40}
      fill="white"
      stroke="#e5e5e5"
      rx={6}
      ry={6}
    />
    <text
      x={0}
      y={25}
      textAnchor="middle"
      fill={payload.value === "Sunday" ? "#ff6619" : "#000"}
      className="font-medium"
    >
      {payload.value}
    </text>
  </g>
);

const XAxisBackground: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => <rect x={0} y={0} width={width} height={height} fill="#000" />;

export const WeeklyPlanner: React.FC = () => {
  const data: DayData[] = useMemo(() => {
    return DAYS_OF_WEEK.map((day) => {
      const appointment = APPOINTMENTS.find((apt) => apt.day === day);
      return {
        day,
        duration: appointment ? appointment.end - appointment.start : 0,
        offset: appointment ? appointment.start : 0,
        name: appointment?.name,
        type: appointment?.type,
        time: appointment?.time,
        start: appointment?.start,
        end: appointment?.end,
      };
    });
  }, []);

  return (
    <div className="w-[1200px]">
      <div className="h-[600px]" role="region" aria-label="Weekly Calendar">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="horizontal"
            barGap={0}
            barCategoryGap={20}
            margin={{ top: 20, right: 20, left: 70, bottom: 20 }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
              stroke="#e5e5e5"
            />

            <XAxis
              dataKey="day"
              type="category"
              tickLine={false}
              axisLine={false}
              height={50}
              tick={DayLabel}
            >
              <XAxisBackground width={1000} height={50} />
            </XAxis>
            <YAxis
              type="number"
              domain={[4, 28]}
              ticks={[4, 8, 12, 16, 20, 24, 28]}
              tickFormatter={(value) => {
                const timeIndex = Math.floor((value - 4) / 4);
                return TIME_SLOTS[timeIndex] || "";
              }}
              orientation="left"
            />
            <Bar dataKey="offset" stackId="a" fill="transparent" />
            <Bar
              dataKey="duration"
              stackId="a"
              fill="#fff5e5"
              radius={[8, 8, 8, 8]}
              stroke="#ffd7b5"
              strokeWidth={1}
              filter="drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))"
            >
              <LabelList
                dataKey={(d: DayData) => d}
                content={<AppointmentLabel />}
                position="center"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyPlanner;
