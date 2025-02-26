import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

type PrimaryButtonProps = {
  content: string;
};

export default function PrimaryButton({ content }: PrimaryButtonProps) {
  return (
    <Link
      href={"/caregivers/add-caregiver"}
      className="flex gap-2 px-4 py-2 bg-brand-colors-brand2 text-white w-fit  rounded-md shadow-[inset_0px_-1px_4px_2px_rgba(255,255,255,0.30)] border border-brand-colors-brand5 text-regular-text-thicker h-fit items-center"
    >
      <Plus></Plus>
      <p className="">{content}</p>
    </Link>
  );
}
