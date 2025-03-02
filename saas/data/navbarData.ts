// navbarData.ts
import SearchIcon from "@/components/icons/SearchIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import InboxIcon from "@/components/icons/InboxIcon";
import CaregiverIcon from "@/components/icons/CaregiverIcon";
import ClientIcon from "@/components/icons/ClientIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import AgreementIcon from "@/components/icons/AgreementIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";
import MobileAppIcon from "@/components/icons/MobileAppIcon";
import HelpIcon from "@/components/icons/HelpIcon";
import StarsIcon from "@/components/icons/StarsIcon";

interface NavLink {
  label: string;
  href: string;
  icon: (props: any) => JSX.Element;
}

// If you also have "bottom links," you can separate them:
export const NAVBAR_TOP_LINKS: NavLink[] = [
  {
    label: "Search",
    href: "/search",
    icon: SearchIcon,
  },
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Inbox",
    href: "/inbox",
    icon: InboxIcon,
  },
];

export const NAVBAR_MIDDLE_LINKS: NavLink[] = [
  {
    label: "Caregivers",
    href: "/caregivers",
    icon: CaregiverIcon,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: ClientIcon,
  },
  {
    label: "Schedules",
    href: "/schedules",
    icon: CalendarIcon,
  },
  {
    label: "Fill a Spot",
    href: "/filla-spot",
    icon: MobileAppIcon,
  },
  {
    label: "Agreements",
    href: "/agreements",
    icon: AgreementIcon,
  },
  {
    label: "Notifications & ...",
    href: "/notification",
    icon: NotificationIcon,
  },
  {
    label: "Mobile App",
    href: "/mobileapp",
    icon: MobileAppIcon,
  },
];

export const NAVBAR_BOTTOM_LINKS: NavLink[] = [
  {
    label: "Help",
    href: "/help",
    icon: HelpIcon,
  },
  {
    label: "Getting started",
    href: "/getting-starting",
    icon: StarsIcon,
  },
];
