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

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Record<string, any>) => void;
  filterOptions: FilterOption[];
  initialFilters?: Record<string, any>;
}

export function FilterModal2({
  isOpen,
  onClose,
  onApply,
  filterOptions,
  initialFilters = {},
}: FilterModalProps) {
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters);

  // Reset filters to initial state when modal opens
  useEffect(() => {
    if (isOpen) {
      setFilters(initialFilters);
    }
  }, [isOpen, initialFilters]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
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
            <div key={option.key} className="flex  items-center gap-4">
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
                        checked={filters[option.key]?.includes(opt)}
                        onCheckedChange={(checked) => {
                          const currentValues = filters[option.key] || [];
                          const newValues = checked
                            ? [...currentValues, opt]
                            : currentValues.filter(
                                (value: string) => value !== opt
                              );
                          handleFilterChange(option.key, newValues);
                        }}
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
                  className=" col-span-3 focus:ring-blue-500 focus:border-blue-500 "
                  value={filters[option.key] || ""}
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
          <Button variant={"primary"} type="submit" onClick={handleApply}>
            <p className="text-white"> Apply Filters</p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
