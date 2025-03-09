"use client";

import { useState, useEffect } from "react";
import NotificationHeader from "@/components/notification/NotificationHeader";
import NotificationList from "@/components/notification/NotificationList";
import EditModeHeader from "@/components/notification/EditModeHeader";
import {
  notifications,
  markAsRead,
  deleteNotifications,
} from "@/data/notification_data";
import type { NotificationType } from "@/types/notification_types";

export default function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [notificationItems, setNotificationItems] = useState<
    NotificationType[]
  >([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    setNotificationItems(notifications);
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      setSelectedIds([]);
    }
  };

  const handleSelectNotification = (id: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.length === notificationItems.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(notificationItems.map((item) => item.id));
    }
  };

  const handleMarkAsRead = () => {
    let updatedNotifications;
    if (selectedIds.length === 0) {
      // If no notifications are selected, mark all as read
      updatedNotifications = markAsRead();
    } else {
      // Otherwise, mark only selected notifications as read
      updatedNotifications = markAsRead(selectedIds);
    }
    setNotificationItems(updatedNotifications);
    setSelectedIds([]);
  };

  const handleDelete = () => {
    if (selectedIds.length === 0) return;

    const updatedNotifications = deleteNotifications(selectedIds);
    setNotificationItems(updatedNotifications);
    setSelectedIds([]);
  };

  const handleMarkSingleAsRead = (id: string) => {
    const updatedNotifications = markAsRead([id]);
    setNotificationItems(updatedNotifications);
  };

  const handleDeleteSingle = (id: string) => {
    const updatedNotifications = deleteNotifications([id]);
    setNotificationItems(updatedNotifications);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex justify-start">
          <button
            onClick={toggleEditMode}
            className="text-[#007aff] font-medium hover:underline"
          >
            {isEditMode ? "Done" : "Edit"}
          </button>
        </div>
        <NotificationHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {isEditMode && (
          <div className="text-tagline">
            <EditModeHeader
              onMarkAllAsRead={handleMarkAsRead}
              onSelectAll={handleSelectAll}
              onDelete={handleDelete}
              allSelected={
                selectedIds.length === notificationItems.length &&
                notificationItems.length > 0
              }
            />
          </div>
        )}
      </div>

      <NotificationList
        searchQuery={searchQuery}
        isEditMode={isEditMode}
        selectedIds={selectedIds}
        onSelectNotification={handleSelectNotification}
        onMarkAsRead={handleMarkSingleAsRead}
        onDelete={handleDeleteSingle}
        notifications={notificationItems}
      />
    </div>
  );
}
