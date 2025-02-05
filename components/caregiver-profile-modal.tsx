"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { Caregiver } from "../types/caregiver"

interface CaregiverProfileModalProps {
  isOpen: boolean
  onClose: () => void
  caregiver?: Caregiver
}

export function CaregiverProfileModal({ isOpen, onClose, caregiver }: CaregiverProfileModalProps) {
  if (!caregiver) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90%] h-[85vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{caregiver.name}</h2>
          {/* Add more caregiver profile content here */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

