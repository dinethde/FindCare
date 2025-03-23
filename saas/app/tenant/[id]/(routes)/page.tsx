"use client";

import React from 'react';
import Card from "@/components/cards/Card";
import SatisfactionGauge from "@/components/charts/GaugeChart";
import { GrowthChart } from "@/components/charts/growth-chart";
import { useGetTenantById } from "@/utils/hooks/useGetTenantById";
import { useParams } from "next/navigation";
import { useMemo } from "react";

/**
 * Interface for dashboard statistics data
 * @interface DashboardStats
 */
interface DashboardStats {
  revenue: number;
  totalShifts: {
    completed: number;
    total: number;
  };
  caregivers: number;
  clients: number;
  satisfactionRate: number;
}

/**
 * Home Component - Main Dashboard Page
 * Displays key metrics and statistics for the agency including:
 * - Total Revenue
 * - Shift Completion Status
 * - Caregiver Count
 * - Client Count
 * - Agency Growth Chart
 * - Satisfaction Rate
 *
 * @component
 * @returns {React.ReactElement} The rendered dashboard component
 */
export default function Home(): React.ReactElement {
  // Extract and parse tenant ID from route parameters
  const tenantId = Number(useParams().id);
  
  /**
   * Fetch tenant data using custom hook
   * @type {DashboardStats | undefined}
   */
  const { data: homePageData } = useGetTenantById(tenantId);

  /**
   * Memoized dashboard statistics to prevent unnecessary recalculations
   * @type {DashboardStats | null}
   */
  const dashboardStats = useMemo<DashboardStats | null>(() => {
    if (homePageData) {
      return homePageData;
    }
    return null;
  }, [homePageData]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="w-full relative flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1.25rem] text-neutral-colors-neutral-11 font-small-text">
          <div className="w-full flex gap-4">
            {/* Revenue Card */}
            <Card revenue={560000} color={"#FF4B00"} />

            {/* Shifts Status Card */}
            <Card
              title="Total Shifts"
              revenue={"120/"}
              dataType={`100`}
              dataTypeClassName="text-[18px] font-medium text-neutral-8"
              contentClassName="text-h4"
            />

            {/* Caregivers Count Card */}
            <Card
              revenue={24}
              dataType=""
              title="Total Caregivers"
              color="#FF2D55"
            />

            {/* Clients Count Card */}
            <Card
              revenue={36}
              dataType=""
              title="Total Clients"
              color="#007AFF"
            />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-[1.5fr_0.75fr] gap-4">
        <GrowthChart />
        <SatisfactionGauge
          value={95}
          date="Oct 2024"
          title="Agency's Satisfaction Rate"
        />
      </div>
      <div className="flex min-h-screen items-center justify-center p-4 bg-background"></div>
    </div>
  );
}
