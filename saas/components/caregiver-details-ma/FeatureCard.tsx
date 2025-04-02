"use client";

import { User, Check } from "lucide-react";
import type { FeatureItem } from "@/types/caregiver-details-ma/caregiver";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

/**
 * Props for the FeatureCard component
 */
interface FeatureCardProps {
  item: FeatureItem;
  isEditing: boolean;
  onUpdate?: (updatedItem: FeatureItem) => void;
  isSelected?: boolean;
  onSelect?: () => void;
}

/**
 * FeatureCard component displays a feature item
 */
const FeatureCard = ({
  item,
  isEditing,
  onUpdate,
  isSelected,
  onSelect,
}: FeatureCardProps) => {
  /**
   * Updates a field in the feature item
   * @param field - The field to update
   * @param value - The new value
   */
  const updateField = (field: keyof FeatureItem, value: string) => {
    onUpdate?.({
      ...item,
      [field]: value,
    });
  };

  return (
    <div
      className={`mt-4 flex gap-3 p-3 bg-gray-50 rounded-md ${isSelected ? "ring-2 ring-blue-500" : ""} ${onSelect ? "border-[1px] border-neutral-3 cursor-pointer hover:bg-gray-100" : ""}`}
      onClick={onSelect}
    >
      <div className="flex justify-center items-start pt-[2px] flex-shrink-0 rounded-full ">
        <User size={20} className="text-grey-darker" />
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
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-tagline text-grey-darker font-medium">
            {item.title}
          </div>
          <p className="text-regular-text text-neutral-7">{item.description}</p>
        </div>
      )}
      {isSelected && (
        <div className="flex-shrink-0 text-blue-500">
          <Check size={20} stroke="#007AFF" />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
