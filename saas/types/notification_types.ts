export interface UserType {
  id: string
  name: string
  avatar: string
  role: "caregiver" | "care recipient"
}

/**
 * Notification type definition
 */
export interface NotificationType {
  id: string
  user: UserType
  timestamp: string
  message: string
  isUnread: boolean
}

