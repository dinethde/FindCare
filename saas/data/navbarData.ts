import React from "react";
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
  icon: (props: any) => React.ReactElement;
}

const createLinks = (tenantId: string) => {
  const baseUrl = `/tenant/${tenantId}`;

  // Top links with dynamic tenant ID
  const topLinks: NavLink[] = [
    {
      label: "Search",
      href: `${baseUrl}/search`,
      icon: SearchIcon,
    },
    {
      label: "Home",
      href: baseUrl,
      icon: HomeIcon,
    },
    {
      label: "Inbox",
      href: `${baseUrl}/inbox`,
      icon: InboxIcon,
    },
  ];

  // Middle links with dynamic tenant ID
  const middleLinks: NavLink[] = [
    {
      label: "Caregivers",
      href: `${baseUrl}/caregivers`,
      icon: CaregiverIcon,
    },
    {
      label: "Clients",
      href: `${baseUrl}/clients`, // This is correct - pointing to the plural "clients"
      icon: ClientIcon,
    },
    {
      label: "Schedules",
      href: `${baseUrl}/schedules`,
      icon: CalendarIcon,
    },
    {
      label: "Fill a Spot",
      href: `${baseUrl}/filla-spot`,
      icon: MobileAppIcon,
    },
    {
      label: "Agreements",
      href: `${baseUrl}/agreements`,
      icon: AgreementIcon,
    },
    {
      label: "Notifications & ...",
      href: `${baseUrl}/notification`,
      icon: NotificationIcon,
    },
    {
      label: "Mobile App",
      href: `${baseUrl}/mobileapp`,
      icon: MobileAppIcon,
    },
  ];

  // Bottom links with dynamic tenant ID
  const bottomLinks: NavLink[] = [
    {
      label: "Help",
      href: `${baseUrl}/help`,
      icon: HelpIcon,
    },
    {
      label: "Getting started",
      href: `${baseUrl}/getting-starting`,
      icon: StarsIcon,
    },
  ];

  return {
    NAVBAR_TOP_LINKS: topLinks,
    NAVBAR_MIDDLE_LINKS: middleLinks,
    NAVBAR_BOTTOM_LINKS: bottomLinks,
  };
};

export default createLinks;
