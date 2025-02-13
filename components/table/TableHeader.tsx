"use client";

import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchBar2 } from "./SearchBar2";
import ApplyFilter from "../ApplyFilter";

interface TableHeaderProps {
  title: string;
  onSearch: (query: string) => void;
  onFilter: () => void;
  showTabs?: boolean;
  showSeeMore?: boolean;
}

export function TableHeader({
  title,
  onSearch,
  onFilter,
  showTabs,
}: TableHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-h5  text-neutral-10">{title}</h1>
        <div className="flex items-center gap-4">
          <div className="w-72">
            <SearchBar2 onSearch={onSearch} placeholder="Search..." />
          </div>
          <ApplyFilter onFilter={onFilter} />
        </div>
      </div>
      {showTabs && (
        <Tabs defaultValue="all" className="mt-4">
          <TabsList>
            <TabsTrigger value="all" className="text-tagline text-neutral-7">
              All
            </TabsTrigger>
            <TabsTrigger
              value="working"
              className="text-tagline text-neutral-7"
            >
              Working Clients
            </TabsTrigger>
            <TabsTrigger value="past" className="text-tagline text-neutral-7">
              Past Clients
            </TabsTrigger>
          </TabsList>
        </Tabs>
      )}
    </div>
  );
}
