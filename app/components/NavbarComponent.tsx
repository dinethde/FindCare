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

const NavbarComponent: NextPage = () => {
  return (
    <div className="relative bg-main-2 min-h-screen flex flex-col items-start justify-center">
      <div className="self-stretch flex flex-col items-start justify-center p-[0.5rem] px-[1rem]">
        <div className="flex flex-row items-center justify-start">
          <b className="font-regular_text">Find Care</b>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center p-[1rem] gap-[1.75rem]">
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.25rem] gap-[0.75rem]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
            <Image
              className="w-[1rem] relative h-[1rem]"
              width={16}
              height={16}
              alt=""
              src={searchIcon}
            />
            <div className="flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Search</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] text-brand-main">
            <Image
              className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
              width={16}
              height={16}
              alt=""
              src={homeIcon}
            />
            <div className=" flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Home</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
            <Image
              className="w-[1rem] relative h-[1rem]"
              width={16}
              height={16}
              alt=""
              src={inboxIcon}
            />
            <div className="flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Inbox</p>
            </div>
          </div>
        </div>
        <div className="self-stretch relative  h-[0.8px] bg-grey" />
        <div className="flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[1.25rem] relative h-[1.25rem]"
              width={20}
              height={20}
              alt=""
              src={caregiverIcon}
            />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Caregiver</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[1.319rem] relative h-[1.063rem]"
              width={21}
              height={17}
              alt=""
              src={clientIcon}
            />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Client</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[1.25rem] relative h-[1.25rem]"
              width={20}
              height={20}
              alt=""
              src={calendarIcon}
            />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Schedules</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[1.25rem] relative h-[1.25rem]"
              width={20}
              height={20}
              alt=""
              src={agreementIcon}
            />
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Agreements</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[1.25rem] relative h-[1.25rem]"
              width={20}
              height={20}
              alt=""
              src={notificationIcon}
            />
            <div className="w-[7.313rem] overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Notifications...</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="w-[1.25rem] bg-white h-[1.25rem] flex flex-row items-center justify-center">
              <Image
                className="w-[0.875rem] relative h-[1.188rem]"
                width={14}
                height={19}
                alt=""
                src={mobileAppIcon}
              />
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center">
              <p className="font-regular_text font-medium">Mobile App</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[0.75rem] text-[0.875rem]">
        <div className="self-stretch flex flex-col items-start justify-start pl-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <Image width={20} height={20} alt="" src={helpIcon} />
            <div className="font-regular_text">Help</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pl-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <Image width={20} height={20} alt="" src={starsIcon} />
            <div className="font-regular_text">Getting starting</div>
          </div>
        </div>

        <div
          className="w-full flex flex-row items-center justify-start p-[0.75rem] gap-[0.5rem] text-[1rem] font-jura"
          style={{ borderTop: "1px solid grey" }}
        >
          <Image
            className="w-[1.875rem] relative rounded-[100px] h-[1.875rem] object-cover"
            width={30}
            height={30}
            alt=""
            src={photo}
          />
          <b>Dineth De Silva</b>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
