export interface RevenueCardProps {
  revenue?: number | string;
  title?: string;
  selectedMonth?: string;
  onMonthChange?: (month: string) => void;
  color?: string;
  isButtonVisible?: boolean;
  dataType?: string;
  btnVarient?: string;
  link?: string;
  isBigText?: boolean;
  contentClassName?: string;
  dataTypeClassName?: string;
}

export type Month = {
  value: string;
  label: string;
};
