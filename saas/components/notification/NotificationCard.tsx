import type React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import type { NotificationType } from "@/types/notification_types";

/**
 * Props for the NotificationCard component
 */
interface NotificationCardProps {
  notification: NotificationType;
  isEditMode?: boolean;
  isSelected?: boolean;
  onSelect?: (isSelected: boolean) => void;
  onMarkAsRead?: () => void;
  onDelete?: () => void;
  onClick?: () => void;
}

/**
 * Reusable notification card component
 * Displays a single notification with avatar, name, role, timestamp, and message
 * @param notification - The notification data to display
 * @param isEditMode - Whether edit mode is active
 * @param isSelected - Whether the notification is selected in edit mode
 * @param onSelect - Function to handle selection change
 * @param onMarkAsRead - Function to mark the notification as read
 * @param onDelete - Function to delete the notification
 */
export default function NotificationCard({
  notification,
  isEditMode = false,
  isSelected = false,
  onSelect = () => {},
  onMarkAsRead = () => {},
  onDelete = () => {},
  onClick = () => {},
}: NotificationCardProps) {
  const { id, user, timestamp, message, isUnread } = notification;

  /**
   * Handle checkbox change
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.checked);
  };

  /**
   * Truncate message to two lines
   */
  const truncateMessage = (msg: string) => {
    const words = msg.split(" ");
    let truncated = "";
    let lines = 0;

    for (const word of words) {
      if (lines >= 2) break;
      if ((truncated + word).length > 100) {
        lines++;
        if (lines < 2) truncated += "\n";
      }
      if (lines < 2) truncated += (truncated.endsWith("\n") ? "" : " ") + word;
    }

    return truncated.trim() + (truncated.length < msg.length ? "..." : "");
  };

  const handleClick = () => {
    if (!isEditMode) {
      onClick();
    }
  };

  return (
    <div className="flex gap-2 items-center">
      {isEditMode && (
        <div className="flex-shrink-0 mt-2 w-fit">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
            className="h-5 w-5 border-neutral-4 text-[#007aff] focus:ring-[#007aff]"
          />
        </div>
      )}
      <div
        className={`w-full border ${isUnread ? "border-[#007aff]" : "border-[#e6e6e6]"} rounded-lg p-4 relative ${!isEditMode ? "cursor-pointer" : ""}`}
        onClick={handleClick}
      >
        <div className="flex items-start gap-4">
          {/* Checkbox for edit mode */}

          {/* User avatar */}
          <div className="flex-shrink-0 h-11 w-11 rounded-full overflow-hidden">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>

          {/* Notification content */}
          <div className="flex-grow flex flex-col gap-4 max-w-[95%]">
            <div className="flex flex-col">
              <h3 className="text-regular-text-thicker text-neutral-11">
                {user.name}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-small-text text-neutral-8">{timestamp}</p>
              </div>
            </div>

            <div className="h-[1px] bg-neutral-4"></div>

            <div className="text-regular-text text-neutral-9 line-clamp-2 truncate flex gap-1">
              <p className="max-w-[98%] overflow-hidden">{message}</p>
              <p className="text-regular-text">...</p>
            </div>
          </div>

          {/* Action buttons in edit mode */}
          {isEditMode && (
            <div className="flex items-center gap-2">
              {isUnread && (
                <button
                  onClick={onMarkAsRead}
                  className="text-[#007aff] font-medium hover:underline"
                >
                  Read
                </button>
              )}
              <button
                onClick={onDelete}
                className="text-[#ff2d55] hover:text-[#ff0033]"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Unread indicator (only shown when not in edit mode) */}
          {!isEditMode && isUnread && (
            <div className="absolute top-4 right-4">
              <div className="h-3 w-3 rounded-full bg-[#007aff]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
