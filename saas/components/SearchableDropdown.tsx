"use client";

/**
 * A searchable dropdown component that allows users to search and select from a list of options
 * @component
 */

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

/**
 * Props for the SearchableDropdown component
 * @interface
 * @property {Array<{id: string, name: string}>} options - Array of options to display in the dropdown
 * @property {string} value - Currently selected value
 * @property {Function} onChange - Callback function when an option is selected
 * @property {Function} onManualEdit - Callback function when input value is manually edited
 * @property {string} placeholder - Placeholder text for the input field
 * @property {('id'|'name')} searchBy - Property to use for searching options
 */
interface SearchableDropdownProps {
  options: { id: string; name: string }[];
  value: string;
  onChange: (value: { id: string; name: string } | null) => void;
  onManualEdit: (value: string) => void;
  placeholder: string;
  searchBy: "id" | "name";
}

/**
 * SearchableDropdown component that provides a searchable dropdown interface
 * @param {SearchableDropdownProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export function SearchableDropdown({
  options,
  value,
  onChange,
  onManualEdit,
  placeholder,
  searchBy,
}: SearchableDropdownProps) {
  // State to control dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  // State to store search input value
  const [search, setSearch] = useState("");
  // Reference to the dropdown container for click outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to handle clicking outside the dropdown to close it
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Filters options based on the search input
   */
  const filteredOptions = options.filter((option) =>
    option[searchBy].toLowerCase().includes(search.toLowerCase())
  );

  /**
   * Handles changes to the input field
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    onManualEdit(newValue);
    setIsOpen(true);
  };

  /**
   * Clears the search input and selected value
   */
  const handleClear = () => {
    setSearch("");
    onChange(null);
  };

  return (
    <div
      className="relative border border-neutral-4 rounded-sm"
      ref={dropdownRef}
    >
      <div className="flex items-center w-fit p-2">
        <Search className="w-4 h-4 mr-2 text-gray-400" />
        <input
          type="text"
          className="w-full focus:outline-none"
          placeholder={placeholder}
          value={search || value}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
        />
        {(search || value) && (
          <X
            className="w-4 h-4 text-gray-400 cursor-pointer"
            onClick={handleClear}
          />
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option) => (
            <div
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onChange(option);
                setSearch(option[searchBy]);
                setIsOpen(false);
              }}
            >
              {option[searchBy]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
