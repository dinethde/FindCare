// BCTableRow.tsx
"use client";

import React from "react";
import Image from "next/image";
import { CaregiverDataType } from "@/types/CaregiverTypes";

interface BCTableRowProps {
  cg: CaregiverDataType;
  index: number;
  isSelected: boolean;
  onRowClick: () => void;
}

export default function BCTableRow({
  cg,
  isSelected,
  onRowClick,
}: BCTableRowProps) {
  return (
    <div
      onClick={onRowClick}
      className={`self-stretch flex flex-row items-center justify-between cursor-pointer rounded-xs ${isSelected ? "selected-table-row" : ""}`}
    >
      <div className="flex flex-row items-center justify-start gap-2 text-neutral-10">
        <Image
          className="w-[2.813rem] h-[2.813rem] rounded-full object-cover"
          alt=""
          src={cg.image}
        />
        <div className="flex flex-col gap-1">
          <div className="leading-[150%] text-regular-text-thicker">
            {cg.name}
          </div>
          <div className="text-xsmall-text leading-[150%]">{cg.id}</div>
        </div>
      </div>
      <div className="leading-[110%] text-regular-text-thicker">
        {cg.clients.length}
      </div>
    </div>
  );
}
