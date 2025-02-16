import { LayoutGrid, Users, Calendar, FileText } from "lucide-react";
import { NavItem, ClientProfile } from "@/types/client-modal/clientModalTypes";
import roviImage from "@/public/images/photo-rovi.png";

export const profile: ClientProfile = {
  id: "CL1500",
  name: "Rovindie Almeida",
  location: "Attidiya",
  email: "client@gmail.com",
  image: roviImage.src,
  about: null,
};

export const navLinks: NavItem[] = [
  {
    title: "Overview",
    icon: LayoutGrid,
    href: "overview",
    isActive: true,
  },
  {
    title: "General Info",
    icon: Users,
    href: "general-info",
  },
  {
    title: "Care Info",
    icon: Calendar,
    href: "care-info",
  },
  {
    title: "Schedule",
    icon: FileText,
    href: "schedule",
  },
];
