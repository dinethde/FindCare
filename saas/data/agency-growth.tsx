export interface AgencyGrowthData {
  month: string;
  total: number;
}

export interface YearData {
  year: number;
  data: AgencyGrowthData[];
}


export const agencyGrowthData: YearData[] = [
  {
    year: 2024,
    data: [
      { month: "Jan", total: 4 },
      { month: "Feb", total: 4.2 },
      { month: "Mar", total: 6.5 },
      { month: "Apr", total: 4 },
      { month: "May", total: 8 },
      { month: "Jun", total: 10 },
    ],
  },
  {
    year: 2023,
    data: [
      { month: "Jan", total: 3 },
      { month: "Feb", total: 3.5 },
      { month: "Mar", total: 4 },
      { month: "Apr", total: 4.5 },
      { month: "May", total: 5 },
      { month: "Jun", total: 5.5 },
      { month: "Jul", total: 6 },
      { month: "Aug", total: 6.5 },
      { month: "Sep", total: 7 },
      { month: "Oct", total: 7.5 },
      { month: "Nov", total: 8 },
      { month: "Dec", total: 8.5 },
    ],
  },
];
