import type { NextPage } from "next";
import Image from "next/image";
import photo from "../../public/images/photo.png";
import searchIcon from "../../public/assets/icons/search-icon.svg";
import homeIcon from "../../public/assets/icons/home-icon.svg";
import inboxIcon from "../../public/assets/icons/inbox-icon.svg";
import caregiverIcon from "../../public/assets/icons/caregiver-icon.svg";
import clientIcon from "../../public/assets/icons/client-icon.svg";
import calendarIcon from "../../public/assets/icons/calendar-icon.svg";
import agreementIcon from "../../public/assets/icons/agreement-icon.svg";
import notificationIcon from "../../public/assets/icons/notification-icon.svg";
import mobileAppIcon from "../../public/assets/icons/mobile_app-icon.svg";
import helpIcon from "../../public/assets/icons/help-icon.svg";
import starsIcon from "../../public/assets/icons/stars-icon.svg";
// Importing SVGs
import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon";
import InboxIcon from "./icons/InboxIcon";
import CaregiverIcon from "./icons/CaregiverIcon";
import ClientIcon from "./icons/ClientIcon";
import CalendarIcon from "./icons/CalendarIcon";
import AgreementIcon from "./icons/AgreementIcon";
import NotificationIcon from "./icons/NotificationIcon";
import MobileAppIcon from "./icons/MobileAppIcon";
import HelpIcon from "./icons/HelpIcon";
import StarsIcon from "./icons/StarsIcon";

const NavbarComponent: NextPage = () => {
  return (
    <div className="relative bg-main-2 min-h-screen flex flex-col items-start justify-center  w-auto max-w-[16rem] whitespace-nowrap">
      <div className="self-stretch flex  justify-start p1-4 p-[0.5rem] pl-3 gap-2">
        <Image
          className="relative rounded-md object-cover "
          width={30}
          height={30}
          alt=""
          src={photo}
        />
        <div className="flex flex-row items-center justify-start">
          <b className="font-regular_text">Find Care</b>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center p-[1rem] gap-[1.75rem]">
        {/* Top items wrapper */}
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.25rem] gap-[1rem]">
          {/* Search Page Nav Link */}
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
            <SearchIcon />
            <div className="flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Search</p>
            </div>
          </div>

          {/* Home Page Nav Link */}
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] text-brand-main">
            <HomeIcon color={"#FA5300"} />
            <div className=" flex flex-row items-center justify-center">
              <p className="font-regular_text font-semibold text-main">Home</p>
            </div>
          </div>

          {/* Inbox Page Nav Link */}
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
            <InboxIcon />
            <div className="flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Inbox</p>
            </div>
          </div>
        </div>
        <div className="self-stretch relative  h-[0.8px] bg-grey" />
        <div className="flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <CaregiverIcon />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Caregivers</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <ClientIcon />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Clients</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <CalendarIcon />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Schedules</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <AgreementIcon />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Agreements</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <NotificationIcon />
            <div className="w-[7.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Notifications...</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <MobileAppIcon />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Mobile App</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[1rem] text-[0.875rem]">
        <div className="self-stretch flex flex-col justify-start gap-[0.75rem] text-[0.875rem] px-4">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <HelpIcon />
            <div className="font-regular_text">Help</div>
          </div>

          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <StarsIcon />
            <div className="font-regular_text">Getting starting</div>
          </div>
        </div>

        <div
          className="w-full flex flex-row items-center justify-start p-[0.75rem] gap-[0.5rem] text-[1rem] font-jura"
          style={{ borderTop: "1px solid grey" }}
        >
          <Image
            className="w-[1.875rem] relative rounded-[100px] h-[1.875rem] object-cover "
            width={30}
            height={30}
            alt=""
            src={photo}
          />
          <b className="text-black">Dineth De Silva</b>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
