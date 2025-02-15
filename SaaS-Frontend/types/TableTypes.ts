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
  showTabs?: boolean;
  showSeeMore?: boolean;
  headerAlignments?: string[];
  showViewAction?: boolean;
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

export interface Client {
  id: string;
  name: string;
  contactInfo: string;
  nok?: string;
  careType: CareType;
  primaryCaregiver: string;
  location: string;
  assignedTimes?: string[];
}

export interface Feedback {
  id: string;
  name: string;
  careType: CareType;
  rate: number;
  review: string;
}
