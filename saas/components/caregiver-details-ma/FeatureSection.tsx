"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import type { FeatureItem } from "@/types/caregiver-details-ma/caregiver";
import FeatureCard from "@/components/caregiver-details-ma/FeatureCard";
import { Button } from "@/components/ui/button";

/**
 * Props for the FeatureSection component
 */
interface FeatureSectionProps {
  title: string;
  selectedItems: FeatureItem[];
  allItems: FeatureItem[];
  onSelectionChange: (items: FeatureItem[]) => void;
  isEditing?: boolean;
}

/**
 * FeatureSection component displays selected feature items and provides a way to choose them
 */
const FeatureSection = ({
  title,
  selectedItems,
  allItems,
  onSelectionChange,
  isEditing = false,
}: FeatureSectionProps) => {
  // State to track if selection interface is open
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  // Local state for tracking selections
  const [localSelectedItems, setLocalSelectedItems] =
    useState<FeatureItem[]>(selectedItems);

  // Update local state when selectedItems prop changes
  useEffect(() => {
    setLocalSelectedItems(selectedItems);
  }, [selectedItems]);

  /**
   * Toggles the selection interface
   */
  const toggleSelection = () => {
    if (isEditing) {
      setIsSelectionOpen(!isSelectionOpen);
    }
  };

  /**
   * Handles item selection
   * @param item - The item to select
   */
  const handleSelect = (item: FeatureItem) => {
    // Check if item is already selected
    const isAlreadySelected = localSelectedItems.some(
      (selectedItem) =>
        selectedItem.title === item.title &&
        selectedItem.description === item.description
    );

    let updatedItems: FeatureItem[];

    if (isAlreadySelected) {
      // Remove item if already selected
      updatedItems = localSelectedItems.filter(
        (selectedItem) =>
          !(
            selectedItem.title === item.title &&
            selectedItem.description === item.description
          )
      );
    } else {
      // Add item, but limit to 3 items
      if (localSelectedItems.length >= 3) {
        // Replace the last item if already have 3
        updatedItems = [...localSelectedItems.slice(0, 2), item];
      } else {
        // Add the new item
        updatedItems = [...localSelectedItems, item];
      }
    }

    setLocalSelectedItems(updatedItems);
    onSelectionChange(updatedItems);
  };

  /**
   * Checks if an item is selected
   * @param item - The item to check
   * @returns True if the item is selected
   */
  const isItemSelected = (item: FeatureItem) => {
    return localSelectedItems.some(
      (selectedItem) =>
        selectedItem.title === item.title &&
        selectedItem.description === item.description
    );
  };

  return (
    <div>
      <div className="p-5 flex items-center justify-between border-b">
        <span className="text-neutral-7 text-tagline">{title}</span>
        {isEditing && (
          <Button onClick={toggleSelection} variant={"secondary"}>
            <span>Choose 3</span>
            {isSelectionOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </Button>
        )}
      </div>

      {/* Always show the selected items */}
      <div className="px-4 pb-4 space-y-2">
        {localSelectedItems.map((item, index) => (
          <FeatureCard
            key={index}
            item={item}
            isEditing={false}
            isSelected={
              isEditing && isSelectionOpen ? isItemSelected(item) : false
            }
            onSelect={
              isEditing && isSelectionOpen
                ? () => handleSelect(item)
                : undefined
            }
          />
        ))}

        {/* Show placeholder if less than 3 items are selected */}
        {localSelectedItems.length < 3 &&
          Array.from({ length: 3 - localSelectedItems.length }).map(
            (_, index) => (
              <div
                key={`placeholder-${index}`}
                className="flex gap-4 p-3 bg-gray-50 rounded-md border border-dashed border-gray-300"
              >
                <div className="flex-shrink-0 bg-gray-200 rounded-full p-2">
                  <User size={16} className="text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-400">
                    Select an option
                  </div>
                  <p className="text-xs text-gray-400">
                    Click Choose 3 to select features
                  </p>
                </div>
              </div>
            )
          )}
      </div>

      {/* Selection interface (shown when isSelectionOpen is true) */}
      {isEditing && isSelectionOpen && (
        <div className="px-4 pb-4 pt-4 ">
          <div className="bg-main border-b h-8 relative z-10">
            <h3 className="text-tagline text-neutral-6">Available Options</h3>
          </div>
          <div className="space-y-2 max-h-[300px] overflow-y-auto px-2 -mt-2">
            {allItems.map((item, index) => (
              <FeatureCard
                key={`available-${index}`}
                item={item}
                isEditing={false}
                isSelected={isItemSelected(item)}
                onSelect={() => handleSelect(item)}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              variant={"secondary"}
              onClick={() => setIsSelectionOpen(false)}
            >
              <span>Done</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureSection;
