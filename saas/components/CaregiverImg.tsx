import React from "react";
import Image from "next/image";
import { profile } from "@/data/dashboard-2";
import photo from "@/public/images/photo.png";

type ImgProps = {
  image?: string;
  imgSize?: number;
};

export default function CaregiverImg({
  image = photo.src,
  imgSize = 270,
}: ImgProps) {
  return (
    <div
      className={`overflow-hidden h-full border-solid box-border border-neutral-4 rounded-small`}
    >
      {/*Profile Image*/}
      <Image
        src={image}
        alt={profile.name}
        width={imgSize}
        height={imgSize}
        sizes={`${imgSize}px`}
        className="object-cover h-full w-full"
      />
    </div>
  );
}
