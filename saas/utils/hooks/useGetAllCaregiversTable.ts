"use client";

import { useQuery } from "@tanstack/react-query";
import type { Caregiver } from "@/types/TableTypes";

interface TableFormatedCaregiver {
  name: string;
  id: string;
  contactInfo: string;
  careType: string;
  rate: number;
  location: string;
  city: string;
}

const useGetTableFormatedCaregiver = () => {
  return useQuery({
    queryKey: ["caregivers"],
    queryFn: async () => {
      const backendData = await getAllTableFormatedCaregiver();

      if (!backendData) return null;

      const mappedData: Caregiver[] = backendData.map(
        (caregiver: TableFormatedCaregive) => ({
          id: caregiver.id.toString(),
          name: `${caregiver.name}`,
          contactInfo: caregiver.contactInfo,
          careType: "Domici Care",
          rate: caregiver.rate,
          location: caregiver.city,
        })
      );

      return mappedData;
    },
  });
};
