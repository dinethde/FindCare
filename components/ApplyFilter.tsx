"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterIcon from "@/components/icons/FilterIcon";

type ApplyFilterProps = {
  onFilter: () => void;
};

export default function ApplyFilter({ onFilter }: ApplyFilterProps) {
  return (
    <div>
      <Button
        variant="outline"
        onClick={onFilter}
        className="text-small-text bg-transparent m-0 p-2 flex justify-center items-center 
    border border-main2
    hover:bg-[#FFF5E5] 
    hover:border-[1px] 
    hover:border-brand-colors-brand5 
    hover:shadow-[0px_2px_4px_rgba(0,_0,_0,_0.15)]
    transition-all duration-200"
      >
        <FilterIcon />
        <span className=""> Apply filter</span>
      </Button>
    </div>
  );
}
