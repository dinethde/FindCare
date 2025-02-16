import type { CardData } from "@/types/progressCardType"

export const progressCardData: CardData[] = [
  {
    id: "1",
    name: "Dineth De Silva",
    code: "CG001",
    timestamp: "07/05/2024 - 20.35",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    status: {
      caregiver: "confirmed",
      guardian: "pending",
      admin: "pending",
    },
  },
  {
    id: "2",
    name: "Dinuka Silva",
    code: "GU001",
    timestamp: "07/05/2024 - 20.35",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    status: {
      caregiver: "confirmed",
      guardian: "confirmed",
      admin: "pending",
    },
  },
  {
    id: "3",
    name: "Jayanta Silva",
    code: "AD001",
    timestamp: "07/05/2024 - 20.35",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nisl iaculis elementum id eget at lacus. In a dictum malesuada interdum mattis lectus.",
    status: {
      caregiver: "confirmed",
      guardian: "confirmed",
      admin: "confirmed",
    },
  },
]

