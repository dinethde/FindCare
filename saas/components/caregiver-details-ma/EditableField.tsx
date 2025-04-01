"use client"

import type React from "react"

import type { ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

/**
 * Props for the EditableField component
 */
interface EditableFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  multiline?: boolean
  action?: React.ReactNode
}

/**
 * EditableField component displays an editable field with a label
 */
const EditableField = ({ label, value, onChange, type = "text", multiline = false, action }: EditableFieldProps) => {
  /**
   * Handles input change events
   * @param e - The change event
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-gray-500">{label}</span>
      <div className="flex items-center gap-2 max-w-[60%]">
        {multiline ? (
          <Textarea value={value} onChange={handleChange} className="min-h-[60px] text-sm" />
        ) : (
          <Input type={type} value={value} onChange={handleChange} className="text-right text-sm" />
        )}
        {action}
      </div>
    </div>
  )
}

export default EditableField

