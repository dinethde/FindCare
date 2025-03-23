"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterOption {
  key: string;
  label: string;
  type: "text" | "number" | "checkbox";
  options?: string[];
}

type FilterValue = string | number | string[];

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Record<string, FilterValue>) => void;
  filterOptions: FilterOption[];
  initialFilters?: Record<string, FilterValue>;
}

export function FilterModal2({
  isOpen,
  onClose,
  onApply,
  filterOptions,
  initialFilters = {},
}: FilterModalProps) {
  const [filters, setFilters] = useState<Record<string, FilterValue>>(initialFilters);

  // Reset filters to initial state when modal opens
  useEffect(() => {
    if (isOpen) {
      setFilters(initialFilters);
    }
  }, [isOpen, initialFilters]);

  const handleFilterChange = (key: string, value: FilterValue) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (key: string, opt: string, checked: boolean) => {
    const currentValues = (filters[key] || []) as string[];
    const newValues = checked
      ? [...currentValues, opt]
      : currentValues.filter((value) => value !== opt);
    handleFilterChange(key, newValues);
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({});
  };

  const handleCancel = () => {
    setFilters(initialFilters);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-h6">Filter Options</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          {filterOptions.map((option) => (
            <div key={option.key} className="flex items-center gap-4">
              <Label
                htmlFor={option.key}
                className="text-right text-tagline text-test-color2"
              >
                {option.label}
              </Label>
              {option.type === "checkbox" ? (
                <div className="col-span-3 space-y-2">
                  {option.options?.map((opt) => (
                    <div key={opt} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${option.key}-${opt}`}
                        checked={Array.isArray(filters[option.key]) && (filters[option.key] as string[]).includes(opt)}
                        onCheckedChange={(checked: boolean) => handleCheckboxChange(option.key, opt, checked)}
                      />
                      <Label
                        className="text-small-text"
                        htmlFor={`${option.key}-${opt}`}
                      >
                        {opt}
                      </Label>
                    </div>
                  ))}
                </div>
              ) : (
                <Input
                  id={option.key}
                  className="col-span-3 focus:ring-blue-500 focus:border-blue-500"
                  value={filters[option.key]?.toString() || ""}
                  onChange={(e) =>
                    handleFilterChange(option.key, e.target.value)
                  }
                  type={option.type}
                />
              )}
            </div>
          ))}
        </div>
        <DialogFooter className="sm:justify-between">
          <div>
            <Button variant="secondary" onClick={handleReset} className="mr-2">
              Reset
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
          <Button variant="primary" onClick={handleApply}>
            <p className="text-white">Apply Filters</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
