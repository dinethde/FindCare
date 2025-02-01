import type { NextPage } from "next";
import Image from "next/image";
import photo from "../../public/images/photo.png";
import searchIcon from "../../public/assets/icons/search-icon.png";
import homeIcon from "../../public/assets/icons/home-icon.png";
import inboxIcon from "../../public/assets/icons/inbox-icon.png";
import caregiverIcon from "../../public/assets/icons/caregiver-icon.png";
import clientIcon from "../../public/assets/icons/client-icon.png";
import calendarIcon from "../../public/assets/icons/calendar-icon.png";
import agreementIcon from "../../public/assets/icons/agreement-icon.png";
import notificationIcon from "../../public/assets/icons/notification-icon.png";
import mobileAppIcon from "../../public/assets/icons/mobile_app-icon.png";
import helpIcon from "../../public/assets/icons/help icon.png";
import starsIcon from "../../public/assets/icons/stars-icon.png";

const NavbarComponent: NextPage = () => {
  return (
    <div className="relative bg-backgrounds-main-2 min-h-screen flex flex-col items-start justify-center gap-[0.625rem] text-left text-[1rem] text-colors-grey-2 font-small-text">
      <div className="self-stretch flex flex-col items-start justify-center py-[0.5rem] px-[1rem] text-neutral-colors-black">
        <div className="flex flex-row items-center justify-start">
          <b className="relative tracking-[-0.03em] leading-[120%]">
            Find Care
          </b>
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
              <div className="relative leading-[150%]">Search</div>
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
              <div className="relative leading-[150%] font-medium">Home</div>
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
              <div className="relative leading-[150%]">Inbox</div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-[0.8px] bg-black" />
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
              <div className="relative leading-[150%] font-medium">
                Caregiver
              </div>
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
              <div className="relative leading-[150%] font-medium">Client</div>
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
              <div className="relative leading-[150%] font-medium">
                Schedules
              </div>
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
              <div className="relative leading-[150%] font-medium">
                Agreements
              </div>
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
              <div className="flex-1 relative leading-[150%] font-medium">
                Notifications...
              </div>
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
              <div className="relative leading-[150%] font-medium">
                Mobile App
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[0.75rem] text-[0.875rem]">
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[1.25rem] pr-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[0.938rem] relative h-[0.938rem]"
              width={15}
              height={15}
              alt=""
              src={helpIcon}
            />
            <div className="relative leading-[150%]">Help</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] pl-[1.25rem] pr-[1rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <Image
              className="w-[0.938rem] relative h-[0.938rem]"
              width={15}
              height={15}
              alt=""
              src={starsIcon}
            />
            <div className="relative leading-[150%]">Getting starting</div>
          </div>
        </div>

        {/* I want to add a top border into bellow class your task is to implement it and generate only the changing bellow code */}
        <div
          className="w-full flex flex-row items-center justify-start p-[0.75rem] gap-[0.5rem] text-left text-[1rem] text-neutral-colors-black font-jura"
          style={{ borderTop: "1px solid black" }}
        >
          <Image
            className="w-[1.875rem] relative rounded-[100px] h-[1.875rem] object-cover"
            width={30}
            height={30}
            alt=""
            src={photo}
          />
          <b className="relative tracking-[-0.03em] leading-[120%]">
            Dineth Silva
          </b>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
