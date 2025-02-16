export type RoleStatus = "confirmed" | "pending"

export interface CardStatus {
  caregiver: RoleStatus
  guardian: RoleStatus
  admin: RoleStatus
}

export interface CardData {
  id: string
  name: string
  code: string
  timestamp: string
  description: string
  status: CardStatus
}

