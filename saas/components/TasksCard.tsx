"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { metrics } from "@/data/dashboard-2";
import type { Month } from "@/types/CardTypes";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export function TasksCard() {
  const { tasks } = metrics;

  return (
    <div className=" w-full h-full">
      {/* Tasks Card */}
      <Card className="big-card space-y-6 h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 mt-3">
          <CardTitle className="text-h6 ">Tasks</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col items-start gap-4">
            {tasks.items.map((task, i) => (
              <div key={i} className="flex items-start justify-center gap-2">
                <Checkbox id={`task-${i}`} />
                <label
                  htmlFor={`task-${i}`}
                  className="text-regular-text text-neutral-10 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
