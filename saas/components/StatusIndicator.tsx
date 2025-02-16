"use client";

import type { CardStatus } from "@/types/progressCardType";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatusIndicatorProps {
  status: CardStatus;
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const roles = ["caregiver", "guardian", "admin"] as const;
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="flex gap-3">
      <TooltipProvider>
        {roles.map((role) => (
          <Tooltip key={role} open={activeTooltip === role}>
            <TooltipTrigger asChild>
              <button
                className={`h-4 w-4 rounded-full transition-colors duration-200 ${
                  status[role] === "confirmed" ? "bg-[#ff6619]" : "bg-[#e6e6e6]"
                }`}
                onMouseEnter={() => setActiveTooltip(role)}
                onMouseLeave={() => setActiveTooltip(null)}
                aria-label={`${role} status`}
              />
            </TooltipTrigger>
            <TooltipContent side="bottom" align="center" sideOffset={5}>
              <p className="text-sm">
                {role.charAt(0).toUpperCase() + role.slice(1)} has
                {status[role] === "confirmed"
                  ? " confirmed "
                  : " not confirmed "}
                the progress
              </p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
