/**
 * Represents a single data point in the pie chart
 */
export interface DataItem {
  /** Name of the data point */
  name: string;
  /** Value of the data point */
  value: number;
  /** Color to represent the data point */
  color: string;
}

/**
 * Represents a time option for the chart (e.g., months, quarters)
 */
export interface TimeOption {
  /** Value of the time option */
  value: string;
  /** Label to display for the time option */
  label: string;
}

/**
 * Represents all the data needed for a single chart
 */
export interface ChartData {
  /** Array of data points for the chart */
  data: DataItem[];
  /** Title of the chart */
  title: string;
  /** Total value represented in the chart */
  total: number;
  /** Array of time options for the chart */
  timeOptions: TimeOption[];
  isCaptionVisible?: boolean;
}
