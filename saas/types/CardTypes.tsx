export interface RevenueCardProps {
  revenue?: number;
  title?: string;
  selectedMonth?: string;
  onMonthChange?: (month: string) => void;
  color?: string;
  isButtonVisible?: boolean;
  dataType?: string;
  btnVarient?: string;
  link?: string;
}

export type Month = {
  value: string;
  label: string;
};
