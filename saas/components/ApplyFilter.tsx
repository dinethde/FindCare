/**
 * Client-side component that renders a filter button
 */
"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterIcon from "@/components/icons/FilterIcon";

/**
 * Props interface for the ApplyFilter component
 * @interface ApplyFilterProps
 * @property {() => void} onFilter - Callback function triggered when filter button is clicked
 */
type ApplyFilterProps = {
  onFilter: () => void;
};

/**
 * ApplyFilter component displays a button that triggers filtering functionality
 * @param {ApplyFilterProps} props - Component props
 * @returns {JSX.Element} A button element with filter icon and text
 */
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
