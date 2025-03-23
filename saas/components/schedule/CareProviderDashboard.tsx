"use client";

import type {
  CareProviderDashboardProps,
} from "@/types/ScheduleTypes";
import { CareProviderCalendar } from "./CareProviderCalendar";

export function CareProviderDashboard({
  agencyData,
}: CareProviderDashboardProps) {

  // Calculate shift statistics
  // const shiftStats: ShiftStatistics = agencyData.schedule.days.reduce(
  //   (acc, day) => {
  //     day.appointments.forEach((appt) => {
  //       acc[appt.status]++;
  //       acc.total++;
  //     });
  //     return acc;
  //   },
  //   { successful: 0, late: 0, cancelled: 0, total: 0 }
  // );

  // Calculate task completion statistics
  // const taskStats: TaskStatistics = Object.values(agencyData.clients).reduce(
  //   (acc, client) => {
  //     client.tasks.forEach((task) => {
  //       acc.total++;
  //       if (task.completed) acc.completed++;
  //     });
  //     return acc;
  //   },
  //   { completed: 0, total: 0 }
  // );

  // const completionPercentage = Math.round(
  //   (taskStats.completed / taskStats.total) * 100
  // );

  return (
    <div className="flex gap-4 w-full">
      <div className="w-full">
        <CareProviderCalendar agencyData={agencyData} />
      </div>
    </div>
  );
}
