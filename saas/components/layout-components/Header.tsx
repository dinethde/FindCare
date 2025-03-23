"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import NetworkIcon from "../icons/NetworkIcon";
import UserProfileIcon from "../icons/UserProfileIcon copy";
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
  "/filla-spot": "Fill a Spot",
  "/search": "Search",
};

export default function Header() {
  const pathname = usePathname();
  const params = useParams();
  const tenantId = params?.id as string;

  // Extract the base path without tenant ID to match our page titles
  const basePath = pathname.split('/').slice(3).join('/');
  const normalizedPath = '/' + basePath;

  // Determine page types
  const isHomePage = normalizedPath === "/";
  const isCaregiverPage = normalizedPath === "/caregivers";
  const isFillaSpotPage = normalizedPath === "/filla-spot";

  // Get title based on the normalized path
  const pageTitle = pageTitles[normalizedPath] || "Home";

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full relative flex flex-row items-center justify-between ">
        {/* Current Page name */}
        <div className="flex flex-row items-center justify-center text-h4 text-grey-darker">
          <p>{pageTitle}</p>
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
            <h2 className="text-h1">{pageTitle}</h2>
            <PrimaryButton content="New Caregiver" />
          </div>
        ) : isFillaSpotPage ? (
          <h2 className="text-h1">Fill a Spot</h2>
        ) : (
          <h2 className="text-h1">{pageTitle}</h2>
        )}
      </div>
    </div>
  );
}
