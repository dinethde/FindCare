"use client";

import { BestCaregiversCard } from "@/components/cards/BestCaregiversCard";
import { TotalShiftsCard } from "@/components/cards/TotalShiftsCard";
import { CareEfficiencyCard } from "@/components/cards/CareEfficiencyCard";
import { caregivers, shiftStats, efficiencyData } from "@/data/mock-data";
import Card from "@/components/cards/Card";
import Link from "next/link";
import React from "react";
import { TableConfig } from "@/types/TableTypes";
import { CaregiverTable } from "@/components/table/CaregiverTable";

export default function CaregiverPage() {
  const caregiverConfig: TableConfig = {
    title: "Client List",
    columns: [
      { key: "name", header: "Name", width: "15%" },
      { key: "contactInfo", header: "Schedule", width: "25%" },
      { key: "careType", header: "Care Type", width: "15%" },
      { key: "rate", header: "Rate", width: "12%" },
      { key: "location", header: "location", width: "15%" },
    ],
    headerAlignments: ["left", "center", "center", "center", "right"],
  };

  const filterOptions = [
    { key: "name", label: "Name", type: "text" },
    {
      key: "careType",
      label: "Care Type",
      type: "checkbox",
      options: ["Domici Care", "Senior Care", "Child Care"],
    },
    { key: "location", label: "Location", type: "text" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="container mx-auto grid grid-cols-[1.25fr_0.65fr_1fr] gap-4 p-0 m-0">
        {/* == Best caregiver card == */}
        <div>
          <BestCaregiversCard caregivers={caregivers} />
        </div>

        {/* == Total Shifts caregiver card == */}
        <div>
          <TotalShiftsCard
            total={shiftStats.total}
            late={shiftStats.late}
            cancelled={shiftStats.cancelled}
          />
        </div>

        <div className="flex flex-col gap-4">
          {/* == Card == */}
          <Card />
          {/* == Care afficeny Card plus chart  == */}
          <CareEfficiencyCard data={efficiencyData} />
        </div>
      </div>

      <div>
        {/* <CaregiverList /> */}
        <CaregiverTable
          caregiverConfig={caregiverConfig}
          filterOptions={filterOptions}
          tableType="eye"
        />
      </div>
    </div>
  );
}
