"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, Search, SlidersHorizontal } from "lucide-react";
import type { Caregiver, FilterState } from "@/types/caregiverTable";
import { FilterModal } from "./filter-modal";
import { CaregiverProfileModal } from "./caregiver-profile-modal";
import { caregivers as initialCaregivers } from "../data/caregiverTable";

const statusColors = {
  Free: "bg-blue-500 text-white",
  Working: "bg-orange-500 text-white",
  Leave: "bg-red-500 text-white",
} as const;

export default function CaregiverList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCaregiver, setSelectedCaregiver] = useState<Caregiver>();
  const [filters, setFilters] = useState<FilterState>({
    workingClientsRange: [0, 6],
    totalClientsRange: [0, 21],
  });

  const filteredCaregivers = initialCaregivers.filter((caregiver) => {
    const matchesSearch = caregiver.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLocation =
      !filters.location ||
      caregiver.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesClientsRange =
      caregiver.clients >= filters.workingClientsRange[0] &&
      caregiver.clients <= filters.workingClientsRange[1];

    return matchesSearch && matchesLocation && matchesClientsRange;
  });

  return (
    <div className="w-full big-card flex flex-col gap-8 ">
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-h5 font-medium tracking-tight">
          {" "}
          <span className="text-neutral-11">Caregiver List</span>
        </h1>
        {/* Search */}
        <div className="flex items-center gap-4 w-full max-w-[400px]">
          <div className="relative rounded-[30px] w-full text-grey-darker ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 " />
            <Input
              className=" 
              text-small-text pl-10 rounded-[30px] w-full [&::placeholder]-text-grey your-input-class"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="ghost"
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2  text-neutral-10 p-0"
          >
            <SlidersHorizontal className=" text-neutral-10" />
            <span className="text-small-text">Apply filter</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_0.5fr] px-1 border-b-[1px] pb-4 border-neutral-6">
          <div className="text-tagline">
            <span className="text-grey">Name</span>
          </div>
          <div className="text-tagline text-center">
            <span className="text-grey">Contact info</span>
          </div>
          <div className="text-tagline text-center">
            <span className="text-grey">Status</span>
          </div>
          <div className="text-tagline text-center">
            <span className="text-grey"> Clients</span>
          </div>
          <div className="text-tagline text-center">
            <span className="text-grey">Rate</span>
          </div>
          <div className="text-tagline text-center">
            <span className="text-grey">Location</span>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="flex flex-col divide-y-[1px]">
          {filteredCaregivers.map((caregiver) => (
            <div
              key={caregiver.id}
              className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_0.5fr] items-center py-4 px-1 "
            >
              <div>{caregiver.name}</div>
              <div className="text-center text-regular-text">
                {caregiver.contactInfo}
              </div>
              <div className="flex justify-center text-regular-text">
                <span className={`px-3 py-2 rounded ${caregiver.status} `}>
                  {caregiver.status}
                </span>
              </div>
              <div className="text-center ">{caregiver.clients} clients</div>
              <div className="text-center">{caregiver.rate}</div>
              <div className="text-center">{caregiver.location}</div>
              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedCaregiver(caregiver)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors flex justify-center content-end"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}

          {filteredCaregivers.length === 0 && (
            <div className="py-8 text-center text-gray-500">
              No caregivers found
            </div>
          )}
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <CaregiverProfileModal
        isOpen={!!selectedCaregiver}
        onClose={() => setSelectedCaregiver(undefined)}
        caregiver={selectedCaregiver}
      />
    </div>
  );
}
