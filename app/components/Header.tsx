"use client"; // Add this at the very top of the file

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NetworkIcon from "../components/icons/NetworkIcon";
import UserProfileIcon from "../components/icons/UserProfileIcon copy";
import SearchIcon from "./icons/SearchIcon";
import "../globals.css";

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

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full relative flex flex-row items-center justify-between ">
        {/* Current Page name */}
        <div className="flex flex-row items-center justify-center text-h4 text-grey-darker">
          <p>{pageTitles[pathname] || "Home"}</p>
        </div>

        {/* Header left items */}
        <div className="w-[22.75rem] flex flex-row items-center justify-start gap-[1.25rem] text-[0.875rem] text-neutral-colors-neutral-9">
          {/* Searching bar */}
          <div className="flex-1 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.12)] rounded-[30px] bg-gray border-neutral-3 border-[0.5px] border-solid flex flex-row items-center justify-start p-3 gap-[0.5rem]">
            <SearchIcon color={"#5A6A72"} />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-center">
                <p className="font-small_text font-medium text-grey">Search</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.12)] rounded-2xl bg-gray border-neutral-3 border-[0.5px] border-solid flex flex-col items-center justify-center p-[0.75rem] cursor-pointer">
              <UserProfileIcon />
            </div>
            <div className="shadow-[0px_1px_3px_rgba(0,_0,_0,_0.12)] rounded-2xl bg-gray border-neutral-3 border-[0.5px] border-solid flex flex-col items-center justify-center p-[0.75rem]">
              <NetworkIcon />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Show greeting only on home page */}
        {isHomePage ? (
          <h2 className="text-h1">Hi, Dineth Silva</h2>
        ) : (
          <h2 className="text-h1">{pageTitles[pathname]}</h2>
        )}
      </div>
    </div>
  );
}
