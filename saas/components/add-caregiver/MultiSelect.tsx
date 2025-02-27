"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { JSX } from "react";

interface MultiSelectProps {
  label: string;
  options: string[];
  maxSelect?: number;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  error?: string;
}

/**
 * MultiSelect component for selecting multiple options
 * @param {MultiSelectProps} props - The props for the MultiSelect component
 * @returns {JSX.Element} The rendered MultiSelect component
 */
export function MultiSelect({
  label,
  options,
  maxSelect = 10,
  selectedValues,
  onChange,
  error,
}: MultiSelectProps): JSX.Element {
  const [open, setOpen] = useState(false);

  /**
   * Toggles the selection of an option
   * @param {string} option - The option to toggle
   * @returns {void}
   */
  const toggleOption = (option: string): void => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((item) => item !== option));
    } else if (selectedValues.length < maxSelect) {
      onChange([...selectedValues, option]);
    }
  };

  /**
   * Removes a selected value
   * @param {string} valueToRemove - The value to remove
   * @returns {void}
   */
  const removeValue = (valueToRemove: string): void => {
    onChange(selectedValues.filter((item) => item !== valueToRemove));
  };

  return (
    <div className="">
      <div className="flex items-center justify-between gap-4">
        <span className="text-gray-600 whitespace-nowrap">{label}</span>
        <div className="flex-1 max-w-[300px]">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between bg-gray-50"
              >
                {selectedValues.length > 0
                  ? `${selectedValues.length} selected`
                  : "Choose 3"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput
                  placeholder={`Search ${label.toLowerCase()}...`}
                />
                <CommandList>
                  <CommandEmpty>No options found.</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => (
                      <CommandItem
                        key={option}
                        onSelect={() => toggleOption(option)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedValues.includes(option)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {selectedValues.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedValues.map((value) => (
                <Badge key={value} variant="secondary" className="px-2 py-1">
                  {value}
                  <button
                    onClick={() => removeValue(value)}
                    className="ml-2 hover:text-destructive focus:outline-none"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
