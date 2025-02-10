"use client";

import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

type ApplyFilterProps = {
  onFilter: () => void;
};

export default function ApplyFilter({ onFilter }: ApplyFilterProps) {
  return (
    <div>
      <Button
        variant="outline"
        onClick={onFilter}
        className="text-small-text border-none bg-transparent m-0 p-0 pr-2"
      >
        <SlidersHorizontal className="text-neutral-9 h-4 w-4" />
        Apply filter
      </Button>
    </div>
  );
}
