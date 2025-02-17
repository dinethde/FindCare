import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import type { Month } from "../../types/CardTypes";
import { SelectTimeProps, YearData } from "@/types/SelectTimeTypes";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export default function SelectTime({
  selectedYear = "oct-2024",
  setSelectedYear,
  data = months,
}: SelectTimeProps) {
  const isMonthData = (item: any): item is Month => "value" in item;

  return (
    <div className="text-grey">
      <Select defaultValue={selectedYear} onValueChange={setSelectedYear}>
        <SelectTrigger className="w-[80px] bg-main2 text-tagline p-0  shadow-[0px_-1px_4px_rgba(0,_0,_0,_0.10)_inset] focus:ring-blue-500 focus:border-blue-500">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="text-grey">
          {data.map((item) => (
            <SelectItem
              key={isMonthData(item) ? item.value : item.year.toString()}
              value={isMonthData(item) ? item.value : item.year.toString()}
            >
              {isMonthData(item) ? item.label : item.year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
