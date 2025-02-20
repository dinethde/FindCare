"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { navLinks, profile } from "@/data/client-modal/clientModal";
import photo from "@/public/images/photo.png";
import { usePathname } from "next/navigation";

export function SidebarClient() {
  const pathname = usePathname();
  const isActive = pathname.split("/profile/")[1];
  console.log("ISACTIVE" + isActive);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 1) + "…";
  };

  return (
    <div
      className=".sidebar-color bg-[#F1F3F4] flex flex-col justify-between w-full text-h6
         max-w-[13ch] p-4 rounded-regular"
    >
      <div className="flex flex-col gap-8 text-regular-text">
        {/* Upper */}
        <div className="space-y-1">
          <h2 className="text-h6 "> {truncateText(profile.name, 15)} </h2>
          <p className="text-sm text-neutral-8">Id: {profile.id}</p>
        </div>

        {/* Middle */}
        <nav className="flex flex-col gap-4 text-grey">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-2 ${
                isActive === item.href.toLowerCase()
                  ? "text-[#ff4b00] font-medium"
                  : "text-[#424957] hover:text-[#ff4b00]"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className={`space-y-3 text-regular-text text-neutral-10 w-full `}>
        <div className={`flex items-center space-x-2`}>
          <MapPin className="h-5 w-5" />
          <span>{profile.location}</span>
        </div>

        <div className="h-[1px] w-full bg-neutral-4"></div>

        <div className="flex items-center space-x-2 ">
          <Image
            className="h-7 w-7 rounded-[50%]"
            src={photo}
            alt={profile.name}
            width={20}
            height={20}
          />
          <span>{truncateText(profile.email, 15)}</span>
        </div>
      </div>
    </div>
  );
}
