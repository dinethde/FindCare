import type { NotificationType } from "@/types/notification_types";
import photo from "@/public/images/photo.png";

/**
 * Sample notification data
 * In a real application, this would likely come from an API
 */
export let notifications: NotificationType[] = [
  {
    id: "1",
    user: {
      id: "user1",
      name: "Dineth De Silva",
      avatar: photo.src,
      role: "caregiver",
    },
    timestamp: "8:35pm 07/05/2024",
    message:
      "Medication reminder: Please ensure Mr. Johnson takes his evening pills. It's crucial for managing his blood pressure and cholesterol levels. If there are any side effects, please document them in the health log.",
    isUnread: true,
  },
  {
    id: "2",
    user: {
      id: "user2",
      name: "Emily Chen",
      avatar: photo.src,
      role: "care recipient",
    },
    timestamp: "2:15pm 07/05/2024",
    message:
      "I'm feeling much better today. Thank you for your care! The new medication seems to be working well, and I was able to take a short walk in the garden this morning.",
    isUnread: false,
  },
  {
    id: "3",
    user: {
      id: "user3",
      name: "Michael Johnson",
      avatar: photo.src,
      role: "caregiver",
    },
    timestamp: "11:20am 07/05/2024",
    message:
      "Scheduled a doctor's appointment for Mrs. Thompson on Friday at 10am. Please ensure she's prepared for the visit and has all her recent health records and medication list ready. I've also arranged for transportation.",
    isUnread: false,
  },
  {
    id: "4",
    user: {
      id: "user4",
      name: "Sarah Thompson",
      avatar: photo.src,
      role: "care recipient",
    },
    timestamp: "9:45am 07/05/2024",
    message:
      "Could you please help me with my physiotherapy exercises this afternoon? I'm experiencing some stiffness in my joints today and would appreciate your guidance to ensure I'm doing the exercises correctly.",
    isUnread: true,
  },
  {
    id: "5",
    user: {
      id: "user5",
      name: "David Lee",
      avatar: photo.src,
      role: "caregiver",
    },
    timestamp: "7:30pm 06/05/2024",
    message:
      "Updated care plan for Mr. Rodriguez. Please review and confirm. The changes include adjustments to his diet, a new sleep schedule, and modified exercise routines. Let me know if you have any questions or concerns.",
    isUnread: false,
  },
  {
    id: "6",
    user: {
      id: "user6",
      name: "Maria Rodriguez",
      avatar: photo.src,
      role: "care recipient",
    },
    timestamp: "4:50pm 06/05/2024",
    message:
      "Thank you for helping me with my groceries today. It means a lot. I was wondering if we could add some more fruits to the list next time? I've been craving some fresh berries and melons.",
    isUnread: true,
  },
  {
    id: "7",
    user: {
      id: "user7",
      name: "John Smith",
      avatar: photo.src,
      role: "caregiver",
    },
    timestamp: "10:05am 06/05/2024",
    message:
      "Reminder: Team meeting to discuss new care protocols at 2pm today. We'll be covering updates to our medication management system, introducing new wellness activities, and reviewing emergency procedures. Please come prepared with any questions or suggestions.",
    isUnread: false,
  },
];

/**
 * Update notifications data
 * @param newNotifications - Updated notifications array
 */
export const updateNotifications = (newNotifications: NotificationType[]) => {
  notifications = newNotifications;
};

/**
 * Mark notifications as read
 * @param notificationIds - IDs of notifications to mark as read. If empty, mark all as read.
 */
export const markAsRead = (notificationIds: string[] = []) => {
  notifications = notifications.map((notification) =>
    notificationIds.length === 0 || notificationIds.includes(notification.id)
      ? { ...notification, isUnread: false }
      : notification
  );
  return notifications;
};

/**
 * Delete notifications
 * @param notificationIds - IDs of notifications to delete
 */
export const deleteNotifications = (notificationIds: string[]) => {
  notifications = notifications.filter(
    (notification) => !notificationIds.includes(notification.id)
  );
  return notifications;
};
