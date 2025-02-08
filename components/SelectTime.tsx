import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { SelectTimeProps, Month, YearData } from "@/types/SelectTimeTypes";

export default function SelectTime({
  selectedYear,
  setSelectedYear,
  data,
}: SelectTimeProps) {
  const isMonthData = (item: any): item is Month => "value" in item;

  return (
    <div className="text-grey">
      <Select defaultValue={selectedYear} onValueChange={setSelectedYear}>
        <SelectTrigger className="w-[100px] bg-[#E8EBEE] text-tagline">
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
