"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchableDropdownProps {
  options: { id: string; name: string }[];
  value: string;
  onChange: (value: { id: string; name: string } | null) => void;
  onManualEdit: (value: string) => void;
  placeholder: string;
  searchBy: "id" | "name";
}

export function SearchableDropdown({
  options,
  value,
  onChange,
  onManualEdit,
  placeholder,
  searchBy,
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const filteredOptions = options.filter((option) =>
    option[searchBy].toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    onManualEdit(newValue);
    setIsOpen(true);
  };

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
