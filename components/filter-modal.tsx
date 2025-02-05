"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import type { FilterState } from "../types/caregiver"

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function FilterModal({ isOpen, onClose, filters, onFiltersChange }: FilterModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-normal">Filters</DialogTitle>
            <div className="flex gap-4 text-primary text-sm">
              <button
                onClick={() =>
                  onFiltersChange({
                    workingClientsRange: [0, 6],
                    totalClientsRange: [0, 21],
                  })
                }
                className="hover:underline"
              >
                Clear all
              </button>
              <button className="hover:underline">Save view</button>
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <div className="space-y-2">
            <label className="text-xl text-gray-400">Location</label>
            <div className="relative">
              <Input
                placeholder="Search location..."
                value={filters.location}
                onChange={(e) => onFiltersChange({ ...filters, location: e.target.value })}
                className="pr-10 h-12 text-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#667085"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xl text-gray-400">Working Clients</label>
            <div className="px-2">
              <Slider
                min={0}
                max={6}
                step={1}
                value={[filters.workingClientsRange[0], filters.workingClientsRange[1]]}
                onValueChange={([min, max]) => onFiltersChange({ ...filters, workingClientsRange: [min, max] })}
                className="mt-6"
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>{filters.workingClientsRange[0]}</span>
                <span>{filters.workingClientsRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xl text-gray-400">Total Clients</label>
            <div className="px-2">
              <Slider
                min={0}
                max={21}
                step={1}
                value={[filters.totalClientsRange[0], filters.totalClientsRange[1]]}
                onValueChange={([min, max]) => onFiltersChange({ ...filters, totalClientsRange: [min, max] })}
                className="mt-6"
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>{filters.totalClientsRange[0]}</span>
                <span>{filters.totalClientsRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

