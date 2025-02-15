"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

interface FilterOption {
  key: string
  label: string
  type: "text" | "number" | "checkbox"
  options?: string[] // For checkbox type
}

interface FilterModal2Props {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: Record<string, any>) => void
  filterOptions: FilterOption[]
}

export function FilterModal2({ isOpen, onClose, onApply, filterOptions }: FilterModal2Props) {
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [initialFilters, setInitialFilters] = useState<Record<string, any>>({})

  useEffect(() => {
    if (isOpen) {
      setInitialFilters({ ...filters })
    }
  }, [isOpen, filters])

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleApply = () => {
    onApply(filters)
    onClose()
  }

  const handleReset = () => {
    setFilters({})
  }

  const handleCancel = () => {
    setFilters(initialFilters)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Options</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {filterOptions.map((option) => (
            <div key={option.key} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={option.key} className="text-right">
                {option.label}
              </Label>
              {option.type === "checkbox" ? (
                <div className="col-span-3">
                  {option.options?.map((opt) => (
                    <div key={opt} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${option.key}-${opt}`}
                        checked={filters[option.key]?.includes(opt)}
                        onCheckedChange={(checked) => {
                          const currentValues = filters[option.key] || []
                          const newValues = checked
                            ? [...currentValues, opt]
                            : currentValues.filter((value: string) => value !== opt)
                          handleFilterChange(option.key, newValues)
                        }}
                      />
                      <Label htmlFor={`${option.key}-${opt}`}>{opt}</Label>
                    </div>
                  ))}
                </div>
              ) : (
                <Input
                  id={option.key}
                  className="col-span-3"
                  value={filters[option.key] || ""}
                  onChange={(e) => handleFilterChange(option.key, e.target.value)}
                  type={option.type}
                />
              )}
            </div>
          ))}
        </div>
        <DialogFooter className="sm:justify-between">
          <div>
            <Button variant="outline" onClick={handleReset} className="mr-2">
              Reset
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
          <Button type="submit" onClick={handleApply}>
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

