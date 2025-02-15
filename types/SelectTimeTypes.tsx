export type Month = {
  value: string;
  label: string;
};

export type YearData = {
  year: number;
  data: Array<{
    month: string;
    total: number;
  }>;
};

export type SelectTimeProps = {
  selectedYear?: string;
  setSelectedYear?: (year: string) => void;
  data?: Month[] | YearData[];
};
