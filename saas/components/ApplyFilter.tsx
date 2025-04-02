"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import FilterIcon from "@/components/icons/FilterIcon";

type ApplyFilterProps = {
  onFilter: () => void;
};

export default function ApplyFilter({ onFilter }: ApplyFilterProps) {
  return (
    <div>
      <Button
        onClick={onFilter}
        className=" bg-white m-0 p-2 px-3 flex justify-center items-center border-[2px] border-neutral-3 rounded-[10px] hover:border-[#99CAFF] hover:bg-white relative z-10 text-neutral-7 hover:text-neutral-9"
      >
        <FilterIcon color="#808080" />
        <span className="text-small-text"> Apply filter</span>

      </Button >
    </div >
  );
}
