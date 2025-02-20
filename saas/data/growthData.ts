import type { GrowthDataPoint, ChartConfig } from "@/types/growthTypes";

// Sample growth data points
export const growthData: GrowthDataPoint[] = [
  { month: "Jan", revenue: 30000, profit: 5000 },
  { month: "Feb", revenue: 35000, profit: 6000 },
  { month: "Mar", revenue: 45000, profit: 8000 },
  { month: "Apr", revenue: 25000, profit: 4000 },
  { month: "May", revenue: 38000, profit: 7000 },
  { month: "Jun", revenue: 52000, profit: 10000 },
  { month: "Jul", revenue: 40000, profit: 7500 },
  { month: "Aug", revenue: 45000, profit: 8500 },
  { month: "Sep", revenue: 48000, profit: 9000 },
  { month: "Oct", revenue: 42000, profit: 8000 },
  { month: "Nov", revenue: 45000, profit: 8500 },
  { month: "Dec", revenue: 65000, profit: 12000 },
];

export const CHART_CONFIG: ChartConfig = {
  title: "Agency Growth",
  subtitle:
    "Agency growth based on revenue, clients and care-recipients' satisfaction rate",
  currentDate: "Oct 2024",
};
