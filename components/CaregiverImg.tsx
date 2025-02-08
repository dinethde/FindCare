import React from "react";
import Image from "next/image";
import { profile } from "@/data/dashboard-2";
import photo from "@/public/images/photo.png";

export default function CaregiverImg() {
  return (
    <div className="h-full max-h-[270px] overflow-hidden border-solid box-border border-neutral-4 rounded-small ">
      {/*Profile Image*/}
      <Image src={photo} alt={profile.name} className="object-cover " />
    </div>
  );
}
