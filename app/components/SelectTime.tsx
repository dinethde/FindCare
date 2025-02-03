import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { agencyGrowthData } from "@/data/agency-growth";

type SelectTimeProps = {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
};

export default function SelectTime({
  selectedYear,
  setSelectedYear,
}: SelectTimeProps) {
  return (
    <div>
      <div className="text-grey">
        <Select
          defaultValue={selectedYear.toString()}
          onValueChange={(value) => setSelectedYear(Number.parseInt(value))}
        >
          <SelectTrigger className="w-[100px] bg-[#E8EBEE] text-tagline">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="text-grey">
            {agencyGrowthData.map((yearData) => (
              <SelectItem key={yearData.year} value={yearData.year.toString()}>
                {yearData.year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
