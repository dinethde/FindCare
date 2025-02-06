"use client";

import { useState } from "react";

import { Eye } from "lucide-react";
import type { Caregiver, FilterState } from "@/types/caregiverTable";
import { FilterModal } from "@/components/FilterModal";
import { CaregiverProfileModal } from "./CaregiverProfileModal";
import { caregivers as initialCaregivers } from "../data/caregiverTable";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

export default function CaregiverList() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
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
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsFilterOpen={setIsFilterOpen}
        />
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
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors flex justify-center content-end">
                  {/*Routing to caregiver page*/}
                  <Link href={`/caregivers/profile/${caregiver.id[0]}/overview`}>
                    <Eye className="h-4 w-4" />
                  </Link>
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
