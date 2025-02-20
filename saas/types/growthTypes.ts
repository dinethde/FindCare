// Define types for growth data
export type GrowthDataPoint = {
  month: string;
  revenue: number;
  profit: number;
};

// Define types for chart configuration
export type ChartConfig = {
  title: string;
  subtitle: string;
  currentDate: string;
};

// Define types for custom tooltip props
export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: GrowthDataPoint;
  }>;
  coordinate?: {
    x: number;
    y: number;
  };
}
