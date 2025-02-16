"use client";

import type {
  CareProviderDashboardProps,
  ShiftStatistics,
  TaskStatistics,
} from "@/types/ScheduleTypes";
import { CareProviderCalendar } from "./CareProviderCalendar";
import { ChartCard } from "../charts/ChartCard";

export function CareProviderDashboard({
  agencyData,
}: CareProviderDashboardProps) {
  // Calculate shift statistics
  const shiftStats: ShiftStatistics = agencyData.schedule.days.reduce(
    (acc, day) => {
      day.appointments.forEach((appt) => {
        acc[appt.status]++;
        acc.total++;
      });
      return acc;
    },
    { successful: 0, late: 0, cancelled: 0, total: 0 }
  );

  // Calculate task completion statistics
  const taskStats: TaskStatistics = Object.values(agencyData.clients).reduce(
    (acc, client) => {
      client.tasks.forEach((task) => {
        acc.total++;
        if (task.completed) acc.completed++;
      });
      return acc;
    },
    { completed: 0, total: 0 }
  );

  const completionPercentage = Math.round(
    (taskStats.completed / taskStats.total) * 100
  );

  return (
    <div className="flex gap-4 w-full">
      <div className="w-full">
        <CareProviderCalendar agencyData={agencyData} />
      </div>
      <div className="space-y-6">
        {/* Total Shifts Chart */}
        <ChartCard
          title="Total Shifts"
          subtitle="This Week"
          data={[
            {
              name: "Successful",
              value: shiftStats.successful,
              color: "#007aff",
            },
            { name: "Late", value: shiftStats.late, color: "#fca827" },
            {
              name: "Cancelled",
              value: shiftStats.cancelled,
              color: "#ff2d55",
            },
          ]}
          centerText={shiftStats.total}
          legend={{
            items: [
              {
                label: "successful shifts",
                value: shiftStats.successful,
                color: "#007aff",
              },
              {
                label: "late shifts",
                value: shiftStats.late,
                color: "#fca827",
              },
              {
                label: "cancelled shifts",
                value: shiftStats.cancelled,
                color: "#ff2d55",
              },
            ],
          }}
        />

        {/* Task Completion Chart */}
        <ChartCard
          title="Total Completion"
          subtitle="This Week"
          data={[
            { name: "Completed", value: taskStats.completed, color: "#fca827" },
            {
              name: "Remaining",
              value: taskStats.total - taskStats.completed,
              color: "#f2f2f2",
            },
          ]}
          centerText={`${completionPercentage}%`}
          footer={[
            { label: "Total tasks:", value: taskStats.total },
            { label: "Completion:", value: taskStats.completed },
          ]}
        />
      </div>
    </div>
  );
}
