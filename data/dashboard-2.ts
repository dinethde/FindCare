import { LayoutGrid, Users, Calendar, FileText } from "lucide-react";
import type {
  CaregiverProfile,
  NavItem,
  ShiftStats,
  LateArrivals,
  Metrics,
} from "@/types/dashboard-2";

export const profile: CaregiverProfile = {
  id: "CG1500",
  name: "Dineth De Silva",
  location: "Panadura",
  email: "cg@gmail.com",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/container%20(1)-Ng7FMoKgh3V1YVkubqWoKaJ76i8wPu.png",
  about: null,
};

export const navigation: NavItem[] = [
  {
    title: "Overview",
    icon: LayoutGrid,
    href: "overview",
    isActive: true,
  },
  {
    title: "Clients",
    icon: Users,
    href: "clients",
  },
  {
    title: "Schedule",
    icon: Calendar,
    href: "schedule",
  },
  {
    title: "Notes",
    icon: FileText,
    href: "notes",
  },
];

export const shiftStats: ShiftStats = {
  total: 20,
  max: 24,
  cancelled: 4,
};

export const lateArrivals: LateArrivals = {
  count: 4,
  total: 20,
};

export const metrics: Metrics = {
  clientSatisfaction: {
    percentage: 95,
    period: "Oct 2024",
  },
  totalShifts: {
    count: 115,
    period: "Oct 2024",
    lateShifts: 5,
    cancelledShifts: 7,
  },
  tasks: {
    items: [
      "Lorem ipsum dolor sit amet consec.",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consecur.",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
    period: "Today",
  },
};
