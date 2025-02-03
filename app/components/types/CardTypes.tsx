export interface RevenueCardProps {
  revenue: number;
  selectedMonth: string;
  onMonthChange: (month: string) => void;
}

export type Month = {
  value: string;
  label: string;
};
