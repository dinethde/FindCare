"use client"

import { useState, useEffect } from "react"
import { User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

/**
 * Props for the CertificationItem component
 */
interface CertificationItemProps {
  title: string
  date: string
  issuer: string
  description?: string
  isEditing?: boolean
  onUpdate?: (
    updatedCert: Partial<{
      title: string
      date: string
      issuer: string
      description?: string
    }>,
  ) => void
}

/**
 * CertificationItem component displays a certification with title, date, and issuer
 */
const CertificationItem = ({
  title,
  date,
  issuer,
  description,
  isEditing = false,
  onUpdate,
}: CertificationItemProps) => {
  // Local state for editing
  const [editableValues, setEditableValues] = useState({
    title,
    date,
    issuer,
    description,
  })

  // Update local state when props change
  useEffect(() => {
    setEditableValues({
      title,
      date,
      issuer,
      description,
    })
  }, [title, date, issuer, description])

  /**
   * Updates a field and notifies parent component
   * @param field - The field to update
   * @param value - The new value
   */
  const updateField = (field: keyof typeof editableValues, value: string) => {
    const updatedValues = {
      ...editableValues,
      [field]: value,
    }
    setEditableValues(updatedValues)
    onUpdate?.(updatedValues)
  }

  return (
    <div className="flex items-start py-2 border-b last:border-b-0">
      <div className="flex-shrink-0 bg-gray-200 rounded-full p-2 mr-3 mt-1">
        <User size={16} className="text-gray-500" />
      </div>
      {isEditing ? (
        <div className="flex-1 space-y-2">
          <Input
            value={editableValues.title}
            onChange={(e) => updateField("title", e.target.value)}
            className="text-sm font-medium"
          />
          {description !== undefined && (
            <Textarea
              value={editableValues.description || ""}
              onChange={(e) => updateField("description", e.target.value)}
              className="text-xs min-h-[60px]"
            />
          )}
        </div>
      ) : (
        <div className="flex-1">
          <div className="text-sm font-medium">{title}</div>
          {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
        </div>
      )}
      {isEditing ? (
        <div className="text-right space-y-2">
          <Input
            value={editableValues.date}
            onChange={(e) => updateField("date", e.target.value)}
            className="text-sm text-right"
          />
          <Input
            value={editableValues.issuer}
            onChange={(e) => updateField("issuer", e.target.value)}
            className="text-sm text-right"
          />
        </div>
      ) : (
        <div className="text-right text-sm text-gray-500">
          <div>{date}</div>
          <div>{issuer}</div>
        </div>
      )}
    </div>
  )
}

export default CertificationItem

