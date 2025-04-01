import type { ReactNode } from "react";

export type CareType = "Domici Care" | "Senior Care" | "Child Care";
export type CaregiverStatus = "Free" | "Working" | "leave";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  width?: string;
  render?: (value: T[keyof T], item: T) => ReactNode;
}

export interface TableConfig<T> {
  title: string;
  columns: TableColumn<T>[];
  showTabs?: boolean;
  showSeeMore?: boolean;
  showViewAction?: boolean;
  headerAlignments?: string[];
}

export interface FilterOption {
  key: string;
  label: string;
  type: "text" | "number" | "checkbox";
  options?: string[];
}

export interface Caregiver {
  id: string;
  name: string;
  contactInfo: string;
  status?: CaregiverStatus;
  clients?: number;
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

export interface Match {
  id: string;
  name: string;
  careType: CareType;
  rate: number;
  location: string;
  reason: string;
  isBestMatch: boolean;
}
