// import type { NextPage } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import "@/app/globals.css";
// import photo from "@/public/images/photo.png";
// import HomeIcon from "../icons/HomeIcon";
// import SearchIcon from "../icons/SearchIcon";
// import InboxIcon from "../icons/InboxIcon";
// import CaregiverIcon from "../icons/CaregiverIcon";
// import ClientIcon from "../icons/ClientIcon";
// import CalendarIcon from "../icons/CalendarIcon";
// import AgreementIcon from "../icons/AgreementIcon";
// import NotificationIcon from "../icons/NotificationIcon";
// import MobileAppIcon from "../icons/MobileAppIcon";
// import HelpIcon from "../icons/HelpIcon";
// import StarsIcon from "../icons/StarsIcon";
// impor

// const NavbarComponent: NextPage = () => {
//   const router = useRouter();

//   // A helper function to check if the route is active
//   const isActive = (path: string) => router.pathname === path;

//   return (
//     // Main wrapper
//     <div className="relative bg-main2 min-h-screen flex flex-col items-start justify-center  w-auto max-w-[16rem] whitespace-nowrap text-grey border-r border-r-neutral-2">
//       {/* Agency name and logo */}
//       <div className="self-stretch flex  justify-start p1-4 p-[0.5rem] pl-3 gap-2 ">
//         {/* Agency logo */}
//         <Image
//           className=" w-[2em] relative h-[2rem] object-cover  rounded-md  "
//           alt=""
//           src={photo}
//         />
//         {/* Agency  Name */}
//         <div className="flex flex-row items-center justify-start">
//           <b className="text-[1.25rem] font-plus-jakarta-sans font-semibold text-black">
//             Find Care
//           </b>
//         </div>
//       </div>

//       {/* Nav items main wrapper */}
//       <div className="flex-1 flex flex-col items-start justify-center p-[1rem] gap-[1.75rem] text-black">
//         {/* Top items wrapper */}

//         <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.25rem] gap-[1rem]">
//           {/* Search Page Nav Link */}

//           <Link href={"/public"} className="navbar-link">

//             <SearchIcon />

//             <div className="flex flex-row items-center justify-center">
//               <p className="text-regular-text">Search</p>
//             </div>

//           </Link>

//           {/* Home Page Nav Link */}
//           <Link href={"/"} className="navbar-link">
//             <HomeIcon color={"#FA5300"} />
//             <div className=" flex flex-row items-center justify-center">
//               <p className="text-regular-text-thicker text-brand-colors-main">
//                 Home
//               </p>
//             </div>
//           </Link>

//           {/* Inbox Page Nav Link */}
//           <Link href={"/inbox"} className="navbar-link">
//             <InboxIcon />
//             <div className="flex flex-row items-center justify-center">
//               <p className="text-regular-text ">Inbox</p>
//             </div>
//           </Link>
//         </div>

//         {/* Horizontal Line */}
//         <div className="self-stretch relative  h-[0.8px] bg-neutral-6" />

//         {/* Navbar pages link wrapper */}
//         <div className="flex flex-col items-start justify-start gap-[1.25rem]">
//           {/* Caregiver page link */}
//           <Link href="/caregivers" className="navbar-link">
//             <CaregiverIcon />
//             <div className="navitem-wrapper">
//               <p className="text-regular-text-thicker font-medium">
//                 Caregivers
//               </p>
//             </div>
//           </Link>

//           {/* Client page link */}
//           <Link href={"/clients"} className="navbar-link">
//             <ClientIcon />
//             <div className="navitem-wrapper">
//               <p className="text-regular-text-thicker font-medium">Clients</p>
//             </div>
//           </Link>

//           {/* Schedule page link */}
//           <Link href={"/schedules"} className="navbar-link">
//             <CalendarIcon />
//             <div className="navitem-wrapper">
//               <p className="text-regular-text-thicker font-medium">Schedules</p>
//             </div>
//           </Link>

//           {/* Agreement page link */}
//           <Link href={"/agreements"} className="navbar-link">
//             <AgreementIcon />
//             <div className="navitem-wrapper">
//               <p className="text-regular-text-thicker font-medium">
//                 Agreements
//               </p>
//             </div>
//           </Link>

//           {/* Notification page link */}
//           <Link href={"/notification"} className="navbar-link">
//             <NotificationIcon />
//             <div className="navitem-wrapper">
//               <p className="text-regular-text-thicker font-medium">
//                 Notifications & ...
//               </p>
//             </div>
//           </Link>

//           {/* Mobile App */}
//           <Link href={"/mobileapp"} className="navbar-link">
//             <MobileAppIcon />
//             <div className="navitem-wrapper">
//               <p className="text-regular-text-thicker font-medium">
//                 Mobile App
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* Navbar bottom wrapper */}
//       <div className="self-stretch flex flex-col items-center justify-center gap-[1rem] text-[0.875rem]">

//         {/* Imporatant Links wrapper */}
//         <div className="self-stretch flex flex-col justify-start gap-[0.75rem] text-[0.875rem] px-4">

//           {/* Helping page link */}
//           <Link href={"/help"} className="navbar-link">
//             <HelpIcon />
//             <div className="text-regular-text">Help</div>
//           </Link>

//           {/* Getting started page link */}
//           <Link href={"/getting-starting"} className="navbar-link">
//             <StarsIcon />
//             <div className="text-regular-text">Getting starting</div>
//           </Link>
//         </div>

//         {/* Account details wrapper */}
//         <Link
//           href={"/settings"}
//           className="w-full flex flex-row items-center justify-start p-[0.75rem] gap-[0.5rem] text-[1rem] font-jura no-underline"
//           style={{ borderTop: "1px solid #BFBFBF" }}
//         >
//           {/* Account profile picture */}
//           <Image
//             className="w-[1.875rem] relative rounded-[100px] h-[1.875rem] object-cover  "
//             alt=""
//             src={photo}
//           />

//           {/* Account name */}
//           <b className="text-black ">Dineth De Silva</b>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NavbarComponent;

// This is my navbar component I want to add a active state when its cliecked. How can I do it?

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import photo from "@/public/images/photo.png";

// Import links
import {
  NAVBAR_TOP_LINKS,
  NAVBAR_MIDDLE_LINKS,
  NAVBAR_BOTTOM_LINKS,
} from "@/data/navbarData";

export default function NavbarComponent() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="relative bg-main2 min-h-screen flex flex-col items-start justify-center  w-auto max-w-[16rem] whitespace-nowrap text-grey border-r border-r-neutral-2">
      {/* Logo + Agency Name */}
      {/* Agency name and logo */}
      <div className="self-stretch flex  justify-start p1-4 p-[0.5rem] pl-3 gap-2 ">
        <Image
          className=" w-[2em] relative h-[2rem] object-cover  rounded-md  "
          alt=""
          src={photo}
        />
        {/* Agency  Name */}
        <div className="flex flex-row items-center justify-start">
          <b className="text-[1.25rem] font-plus-jakarta-sans font-semibold text-black">
            Find Care
          </b>
        </div>
      </div>

      {/* TOP LINKS */}
      <div className="flex-1 flex flex-col items-start justify-center p-[1rem] gap-[1.75rem] text-grey">
        <div className="self-stretch flex flex-col items-start justify-start py-[0rem] px-[0.25rem] gap-5">
          {NAVBAR_TOP_LINKS.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href} className="navbar-link">
                <Icon color={active ? "#FA5300" : "#424957"} />
                <div className="flex flex-row items-center justify-center">
                  <p
                    className={`text-regular-text-thicker ${active ? "text-brand-colors-main font-semibold" : ""}`}
                  >
                    {label}
                  </p>
                </div>
              </Link>
            );
          })}

          <div className="self-stretch relative  h-[0.8px] bg-neutral-6" />

          {/* Middle LINKS */}
          <div className="flex flex-col items-start justify-start gap-[1.25rem]">
            {NAVBAR_MIDDLE_LINKS.map(({ label, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href} className="navbar-link">
                  <Icon color={active ? "#FA5300" : "#424957"} />
                  <div className="flex flex-row items-center justify-center">
                    <p
                      className={`text-regular-text-thicker ${active ? "text-brand-colors-main font-semibold" : ""}`}
                    >
                      {label}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM LINKS + ACCOUNT */}
      <div className="self-stretch flex flex-col items-center justify-center gap-[1rem] text-[0.875rem]">
        <div className="self-stretch flex flex-col justify-start gap-[0.75rem] text-[0.875rem] px-4">
          {NAVBAR_BOTTOM_LINKS.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href} className="navbar-link">
                <Icon color={active ? "#FA5300" : "#424957"} />
                <p
                  className={`text-regular-text ${active ? "text-brand-colors-main font-semibold" : ""}`}
                >
                  {label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Account */}
        <Link
          href={"/settings"}
          className="w-full flex flex-row items-center justify-start p-[0.75rem] gap-[0.5rem] text-[1rem] font-jura no-underline"
          style={{ borderTop: "1px solid #BFBFBF" }}
        >
          {/* Account profile picture */}
          <Image
            className="w-[1.875rem] relative rounded-[100px] h-[1.875rem] object-cover  "
            alt=""
            src={photo}
          />

          {/* Account name */}
          <b className="text-black ">Dineth De Silva</b>
        </Link>
      </div>
    </div>
  );
}
