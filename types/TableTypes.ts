import type React from "react";

export interface TableColumn {
  key: string;
  header: string;
  width?: string;
  render?: (value: any) => React.ReactNode;
}

export interface TableConfig {
  title: string;
  columns: TableColumn[];
  headerAlignments: string[];
  showTabs?: boolean;
  showSeeMore?: boolean;
}

export interface TableProps {
  config: TableConfig;
  data: any[];
  onSearch: (query: string) => void;
  onFilter: () => void;
}

export type CareType = "Domici Care" | "Senior Care" | "Child Care";

export interface Caregiver {
  id: string;
  name: string;
  contactInfo: string;
  careType: CareType;
  rate: number;
  location: string;
}

export interface Feedback {
  id: string;
  name: string;
  careType: CareType;
  rate: number;
  review: string;
}
