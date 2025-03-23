/**
 * React component imports and dependencies
 */
import React from "react";
import Image, { ImageProps } from "next/image";
import { profile } from "@/data/dashboard-2";
import photo from "@/public/images/photo.png";

/**
 * Interface defining the props for the CaregiverImg component
 * @interface ImgProps
 * @property {string} [image] - URL or path of the caregiver's profile image
 * @property {number} [imgSize] - Size of the image in pixels
 */
type ImgProps = {
  image?: string;
  imgSize?: number;
};

/**
 * CaregiverImg Component - Displays a caregiver's profile image
 * @component
 * @param {ImgProps} props - Component props
 * @param {string} props.image - Image source URL, defaults to placeholder photo
 * @param {number} props.imgSize - Size of the image, defaults to 270px
 * @returns {JSX.Element} A container with the caregiver's profile image
 */
export default function CaregiverImg({
  image = photo.src,
  imgSize = 270,
}: ImgProps) {
  return (
    // Container div with styling for the image
    <div
      className={`overflow-hidden h-full border-solid box-border border-neutral-4 rounded-small`}
    >
      {/* Profile Image component using Next.js Image for optimization */}
      <Image
        src={image}
        alt={profile.name}
        width={0}
        height={0}
        sizes="270px"
        className="object-cover h-full w-full"
      />
    </div>
  );
}
