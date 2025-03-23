"use client";

import { useState } from "react";
import { DynamicTable } from "./DynamicTable";
import { matchesData } from "@/data/TableData";
import { matchesConfig, matchesFilterOptions } from "@/config/tableConfig";
import Link from "next/link";

type FilterValue = string | number | string[];

export function MatchesTable() {
  // Initialize with best matches filter enabled
  const [activeFilters, setActiveFilters] = useState<Record<string, FilterValue>>({
    isBestMatch: ["true"],
  });

  // Filter the data based on best matches
  const filteredData = matchesData.filter((match) => {
    const bestMatchFilter = activeFilters.isBestMatch;
    if (!Array.isArray(bestMatchFilter) || !bestMatchFilter.includes("true")) {
      return true; // Show all matches when filter is off
    }
    return match.isBestMatch; // Only show best matches when filter is on
  });

  const handleFilterChange = (filters: Record<string, FilterValue>) => {
    setActiveFilters(filters);
  };

  // Create a custom config that includes the empty state message
  const customConfig = {
    ...matchesConfig,
    emptyStateMessage: "No best matches for this client available now",
  };

  return (
    <div className="w-full flex flex-col gap-8 p-4">
      <h3 className="text-h4"> Filled a Spot</h3>

      <div className="space-y-3 px-2">
        <div>
          <h4 className="text-h6">Rovindie Almeida</h4>
          <p className="text-tagline text-neutral-7"> CR0001</p>
        </div>

        <div className=" flex gap-2 items-center">
          <p className="text-tagline text-neutral-7">Care needed time:</p>
          <div className="flex flex-col gap-1 bg-main border border-support-colors-color3 w-fit p-2 rounded-sm">
            <p className="text-regular-text-thicker text-support-colors-color3">
              Oct 24 - 26 : 6am - 8pm
            </p>
          </div>
        </div>

        <div>
          <Link href="/" className="text-tagline text-neutral-7 underline">
            More information
          </Link>
        </div>
      </div>
      <DynamicTable
        config={customConfig}
        data={filteredData}
        filterOptions={matchesFilterOptions}
        onFilterChange={handleFilterChange}
        initialFilters={activeFilters}
        tableType="fill"
      />
    </div>
  );
}
