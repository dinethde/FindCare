"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { RevenueCardProps, Month } from "../types/CardTypes";
import NestedCirclesIcon from "./icons/NestedCirclesIcon";
import SelectTime from "./SelectTime";
import { useState } from "react";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export default function RevenueCard({
  revenue = 560000,
  title = "Total Revenue",
  color = "#FCA827",
}: RevenueCardProps) {
  const [selectedYear, setSelectedYear] = useState("oct-2024");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="w-full big-card flex gap-5 flex-col">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <h2 className="text-h6 text-neutral-10">{title}</h2>

        <SelectTime
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          data={months}
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-center space-x-3">
          <NestedCirclesIcon color={color} />
          <div className="text-h5 font-bold">
            <p className="font-bold">{formatCurrency(revenue)} LKR</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
