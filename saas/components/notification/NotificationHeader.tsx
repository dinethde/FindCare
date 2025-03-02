import type React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import FilterIcon from "../icons/FilterIcon";

/**
 * Props for the NotificationHeader component
 */
interface NotificationHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

/**
 * Header component for the notifications page
 * Contains the title, search bar, and filter button
 * @param searchQuery - Current search query
 * @param setSearchQuery - Function to update search query
 */
export default function NotificationHeader({
  searchQuery,
  setSearchQuery,
}: NotificationHeaderProps) {
  /**
   * Handle search input changes
   * @param e - Change event from the input element
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <h1 className="text-h5 text-neutral-10">Notifications</h1>
      <div className="flex items-center gap-3">
        {/* Search input */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#7e7e7e]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-4 py-2 w-full md:w-64 rounded-full bg-white border border-[#e6e6e6] focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:border-transparent"
          />
        </div>

        {/* Filter button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e6e6e6] bg-white hover:bg-[#f6f8f8] transition-colors">
          <FilterIcon color="text-[#333333]" />
          <span className="text-tagline text-neutral-8">Apply filter</span>
        </button>
      </div>
    </div>
  );
}
