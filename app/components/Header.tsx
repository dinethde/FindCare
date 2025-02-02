import React from "react";
import Image from "next/image";
import NetworkIcon from "../components/icons/NetworkIcon";
import UserProfileIcon from "../components/icons/UserProfileIcon copy";
import SearchIcon from "./icons/SearchIcon";
import "../globals.css";

export default function Header() {
  return (
    // Main wrapper
    <div className="w-full relative flex flex-row items-center justify-between py-3 px-2">
      {/* Currnent Page name */}
      <div className="flex flex-row items-center justify-center ">
        <p>Home</p>
      </div>

      {/* Header left items w  */}
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
  );
}
