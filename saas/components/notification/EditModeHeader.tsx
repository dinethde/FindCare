interface EditModeHeaderProps {
  onMarkAllAsRead: () => void
  onSelectAll: () => void
  onDelete: () => void
  allSelected: boolean
}

/**
 * Header component for edit mode
 * Contains actions for editing notifications
 */
export default function EditModeHeader({ onMarkAllAsRead, onSelectAll, onDelete, allSelected }: EditModeHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-6">
        <button onClick={onMarkAllAsRead} className="text-[#007aff] font-medium hover:underline">
          Marks all as read
        </button>
        <button onClick={onSelectAll} className="text-[#007aff] font-medium hover:underline">
          {allSelected ? "Deselect All" : "Select All"}
        </button>
      </div>
      <button onClick={onDelete} className="text-[#ff2d55] font-medium hover:underline">
        Delete
      </button>
    </div>
  )
}

