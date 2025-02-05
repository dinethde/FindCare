import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setIsFilterOpen: (Filter: boolean) => void;
};

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  setIsFilterOpen,
}: SearchBarProps) {
  return (
    <div>
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
  );
}
