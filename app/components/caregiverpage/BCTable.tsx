// BCTable.tsx
"use client";
import React, { useState } from "react";
import { CaregiverData } from "@/data/CaregiverData";
import BCTableRow from "./BCTableRow";

export default function BCTable() {
  // Track which row is selected; null means "none selected"
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    // If the clicked row is already selected, deselect it by setting null
    // otherwise, set it as the selected row
    setSelectedRow((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-3">
      {CaregiverData.map((cg, index) => (
        <BCTableRow
          key={cg.id}
          cg={cg}
          index={index}
          isSelected={selectedRow === index}
          onRowClick={() => handleRowClick(index)}
        />
      ))}
    </div>
  );
}
