"use client";

import { useEffect, useState } from "react";
import NotificationCard from "@/components/notification/NotificationCard";
import FullNotificationView from "@/components/notification/FullNotificationView";
import type { NotificationType } from "@/types/notification_types";

interface NotificationListProps {
  searchQuery: string;
  isEditMode: boolean;
  selectedIds: string[];
  onSelectNotification: (id: string, isSelected: boolean) => void;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
  notifications: NotificationType[];
}

export default function NotificationList({
  searchQuery,
  isEditMode,
  selectedIds,
  onSelectNotification,
  onMarkAsRead,
  onDelete,
  notifications,
}: NotificationListProps) {
  const [filteredNotifications, setFilteredNotifications] = useState<
    NotificationType[]
  >([]);
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationType | null>(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredNotifications(notifications);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = notifications.filter(
        (notification) =>
          notification.user.name.toLowerCase().includes(query) ||
          notification.message.toLowerCase().includes(query)
      );
      setFilteredNotifications(filtered);
    }
  }, [searchQuery, notifications]);

  const handleNotificationClick = (notification: NotificationType) => {
    setSelectedNotification(notification);
    if (notification.isUnread) {
      onMarkAsRead(notification.id);
    }
  };

  const handleCloseFullView = () => {
    setSelectedNotification(null);
  };

  if (filteredNotifications.length === 0 && searchQuery.trim() !== "") {
    return (
      <div className="p-8 text-center">
        <p className="text-[#7e7e7e]">
          No notifications found matching "{searchQuery}"
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {filteredNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          isEditMode={isEditMode}
          isSelected={selectedIds.includes(notification.id)}
          onSelect={(isSelected) =>
            onSelectNotification(notification.id, isSelected)
          }
          onMarkAsRead={() => onMarkAsRead(notification.id)}
          onDelete={() => onDelete(notification.id)}
          onClick={() => handleNotificationClick(notification)}
        />
      ))}
      {selectedNotification && (
        <FullNotificationView
          notification={selectedNotification}
          onClose={handleCloseFullView}
        />
      )}
    </div>
  );
}
