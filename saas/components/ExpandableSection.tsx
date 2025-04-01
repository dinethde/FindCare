"use client"

import { useState, useEffect } from "react"
import { ChevronDown, User } from "lucide-react"
import type { FeatureItem } from "@/types/caregiver"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

/**
 * Props for the ExpandableSection component
 */
interface ExpandableSectionProps {
  title: string
  isExpanded: boolean
  onToggle: () => void
  items: FeatureItem[]
  isEditing?: boolean
  onItemChange?: (items: FeatureItem[]) => void
}

/**
 * ExpandableSection component displays a collapsible section with feature items
 */
const ExpandableSection = ({
  title,
  isExpanded,
  onToggle,
  items,
  isEditing = false,
  onItemChange,
}: ExpandableSectionProps) => {
  // Local state for editing items
  const [editableItems, setEditableItems] = useState<FeatureItem[]>(items)

  // Update local state when items prop changes
  useEffect(() => {
    setEditableItems(items)
  }, [items])

  /**
   * Updates an item field and notifies parent component
   * @param index - The index of the item to update
   * @param field - The field to update (title or description)
   * @param value - The new value
   */
  const updateItem = (index: number, field: keyof FeatureItem, value: string) => {
    const updatedItems = [...editableItems]
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    }
    setEditableItems(updatedItems)
    onItemChange?.(updatedItems)
  }

  return (
    <div>
      <div className="p-4 flex items-center justify-between">
        <span className="text-gray-500">{title}</span>
        <button onClick={onToggle} className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-md">
          <span>Choose 3</span>
          <ChevronDown size={16} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </button>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {editableItems.map((item, index) => (
            <div key={index} className="flex gap-4 p-3 bg-gray-50 rounded-md">
              <div className="flex-shrink-0 bg-gray-200 rounded-full p-2">
                <User size={16} className="text-gray-500" />
              </div>
              {isEditing ? (
                <div className="flex-1 space-y-2">
                  <Input
                    value={item.title}
                    onChange={(e) => updateItem(index, "title", e.target.value)}
                    className="text-sm font-medium"
                  />
                  <Textarea
                    value={item.description}
                    onChange={(e) => updateItem(index, "description", e.target.value)}
                    className="text-xs min-h-[60px]"
                  />
                </div>
              ) : (
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.title}</div>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExpandableSection

