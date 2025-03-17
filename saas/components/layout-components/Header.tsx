"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NetworkIcon from "../icons/NetworkIcon";
import UserProfileIcon from "../icons/UserProfileIcon copy";
import SearchIcon from "../icons/SearchIcon";
import PrimaryButton from "../ui/PrimaryButton";

// Define page title mapping
const pageTitles: { [key: string]: string } = {
  "/": "Home",
  "/caregivers": "Caregivers",
  "/clients": "Clients",
  "/getting-starting": "Getting Started",
  "/help": "Help",
  "/inbox": "Inbox",
  "/mobileapp": "Mobile App",
  "/notification": "Notifications",
  "/schedules": "Schedules",
  "/settings": "Settings",
  "/agreements": "Agreements",
};

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isCaregiverPage = pathname === "/caregivers";
  const isFillaSpotPage = pathname === "/filla-spot";
  console.log("pathname", pageTitles[pathname]);

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full relative flex flex-row items-center justify-between ">
        {/* Current Page name */}
        <div className="flex flex-row items-center justify-center text-h4 text-grey-darker">
          <p>{pageTitles[pathname] || "Home"}</p>
        </div>

        {/* Header left items */}
        <div className="w-[22.75rem] flex flex-row items-center justify-end gap-[1.25rem] text-[0.875rem] text-neutral-colors-neutral-9">
          {/* Searching bar */}

          {/* Userprofile icon and Localization settings' icon wrapper */}
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            {/* Userprofile button */}
            <button className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.12)] rounded-2xl bg-gray border-neutral-3 border-[0.5px] border-solid flex flex-col items-center justify-center p-[0.75rem] cursor-pointer">
              <UserProfileIcon />
            </button>

            {/* Localization dropdown */}
            <button className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.12)] rounded-2xl bg-gray border-neutral-3 border-[0.5px] border-solid flex flex-col items-center justify-center p-[0.75rem]">
              <NetworkIcon />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Show greeting only on home page */}
        {isHomePage ? (
          <h2 className="text-h1">Hi, Dineth Silva</h2>
        ) : isCaregiverPage ? (
          <div className="w-full flex justify-between items-center">
            <h2 className="text-h1">{pageTitles[pathname]}</h2>
            <PrimaryButton content="New Caregiver" />
          </div>
        ) : isFillaSpotPage ? (
          <h2 className="text-h1">Fill a Spot</h2>
        ) : (
          <h2 className="text-h1">{pageTitles[pathname]}</h2>
        )}
      </div>
    </div>
  );
}
