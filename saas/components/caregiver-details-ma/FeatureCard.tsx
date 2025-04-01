"use client"

import { User, Check } from "lucide-react"
import type { FeatureItem } from "@/types/caregiver-details-ma/caregiver"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

/**
 * Props for the FeatureCard component
 */
interface FeatureCardProps {
  item: FeatureItem
  isEditing: boolean
  onUpdate?: (updatedItem: FeatureItem) => void
  isSelected?: boolean
  onSelect?: () => void
}

/**
 * FeatureCard component displays a feature item
 */
const FeatureCard = ({ item, isEditing, onUpdate, isSelected, onSelect }: FeatureCardProps) => {
  /**
   * Updates a field in the feature item
   * @param field - The field to update
   * @param value - The new value
   */
  const updateField = (field: keyof FeatureItem, value: string) => {
    onUpdate?.({
      ...item,
      [field]: value,
    })
  }

  return (
    <div
      className={`flex gap-4 p-3 bg-gray-50 rounded-md ${isSelected ? "ring-2 ring-blue-500" : ""} ${onSelect ? "cursor-pointer hover:bg-gray-100" : ""}`}
      onClick={onSelect}
    >
      <div className="flex-shrink-0 bg-gray-200 rounded-full p-2">
        <User size={16} className="text-gray-500" />
      </div>
      {isEditing ? (
        <div className="flex-1 space-y-2">
          <Input
            value={item.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="text-sm font-medium"
          />
          <Textarea
            value={item.description}
            onChange={(e) => updateField("description", e.target.value)}
            className="text-xs min-h-[60px]"
          />
        </div>
      ) : (
        <div className="flex-1">
          <div className="text-sm font-medium">{item.title}</div>
          <p className="text-xs text-gray-500">{item.description}</p>
        </div>
      )}
      {isSelected && (
        <div className="flex-shrink-0 text-blue-500">
          <Check size={20} />
        </div>
      )}
    </div>
  )
}

export default FeatureCard

