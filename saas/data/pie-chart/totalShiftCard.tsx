import { colorProps } from "../ColorProps";

/**
 * Represents the data structure for a single chart
 */
interface ChartData {
  /** Array of data points for the chart */
  data: { name: string; value: number; color: string }[];
  /** Title of the chart */
  title: string;
  /** Total value represented in the chart */
  total: number;
  /** Array of time options for the chart */
  timeOptions: { value: string; label: string }[];
}

/**
 * Data for the Total Shifts chart
 */
export const shiftsData: ChartData = {
  data: [
    { name: "Complete", value: 150, color: colorProps.brand.hex },
    { name: "Late", value: 30, color: colorProps.orange.hsl },
    { name: "Cancelled", value: 20, color: colorProps.blue.hex },
  ],
  title: "Total Shifts",
  total: 200,
  timeOptions: [
    { value: "oct-2024", label: "Oct 2024" },
    { value: "sep-2024", label: "Sep 2024" },
    { value: "aug-2024", label: "Aug 2024" },
  ],
};

/**
 * Data for the Employee Performance chart
 */
export const performanceData: ChartData = {
  data: [
    { name: "Excellent", value: 45, color: colorProps.brand.hex },
    { name: "Good", value: 30, color: colorProps.orange.hsl },
    { name: "Average", value: 15, color: colorProps.blue.hex },
    { name: "Poor", value: 10, color: "#F44336" },
  ],
  title: "Employee Performance",
  total: 100,
  timeOptions: [
    { value: "q4-2024", label: "Q4 2024" },
    { value: "q3-2024", label: "Q3 2024" },
    { value: "q2-2024", label: "Q2 2024" },
  ],
};
