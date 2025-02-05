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
      {/* Row left wrapper */}
      <div className="flex flex-row items-center justify-start gap-2 text-neutral-10">
        {/* Caregiver Image */}
        <Image
          className="w-[2.813rem] h-[2.813rem] rounded-full object-cover"
          alt=""
          src={cg.image}
        />
        {/* CG name & id wrapper */}
        <div className="self-stretch flex flex-col gap-1">
          <div className="leading-[150%] text-regular-text-thicker">
            {cg.name}
          </div>
          <div className="self-stretch text-xsmall-text leading-[150%]">
            {cg.id}
          </div>
        </div>
      </div>

      {/* Row right */}
      <div className="leading-[110%] text-regular-text-thicker">
        {cg.clients.length}
      </div>
    </div>
  );
}
