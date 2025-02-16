import type { LucideIcon } from "lucide-react";

export interface ClientProfile {
  id: string;
  name: string;
  location: string;
  email: string;
  image: string;
  about: string | null;
}
export interface NavItem {
  title: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
}
