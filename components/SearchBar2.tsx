"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBar2Props {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceTime?: number;
}

export function SearchBar2({
  onSearch,
  placeholder = "Search...",
  debounceTime = 300,
}: SearchBar2Props) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch, debounceTime]);

  return (
    <div className="relative w-full ">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-grey" />
      <Input
        className="pl-9 text-regular-text text-neutral-10 w-full [&::placeholder]-text-grey rounded-[30px] shadow-[0px_5px_20px_rgba(0,_0,_0,_0.04),_0px_0px_4px_rgba(0,_0,_0,_0.15)]"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
