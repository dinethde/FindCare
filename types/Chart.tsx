export interface AgencyGrowthData {
  month: string;
  total: number;
}

export interface YearData {
  year: number;
  data: AgencyGrowthData[];
}
