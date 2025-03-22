"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllCaregivers } from "../api-calls/get-all-caregivers";
import type { Caregiver } from "@/types/TableTypes";

// Interface matching the backend caregiver data structure
interface BackendCaregiver {
  age: number;
  agencyId: number | null;
  avgCsr: number;
  caregiverAccountId: number;
  caregiverId: number;
  description: string;
  firstName: string;
  gender: string;
  hiredDate: string;
  lastName: string;
  middleName: string;
  nicNumber: string;
  profileImg: string;
  totalClients: number;
  username: string;
}

export const useGetAllCaregivers = () => {
  return useQuery({
    queryKey: ["caregivers"],
    queryFn: async () => {
      const backendData = await getAllCaregivers();

      // If there's no data, return null
      if (!backendData) return null;

      // Map backend data to frontend format
      const mappedData: Caregiver[] = backendData.map(
        (caregiver: BackendCaregiver) => ({
          id: caregiver.caregiverId.toString(),
          name: `${caregiver.firstName} ${caregiver.lastName}`,
          contactInfo: caregiver.nicNumber, // Using NIC as contact info for now
          careType: "Domici Care", // Default care type - you may want to get this from the backend
          rate: caregiver.avgCsr,
          location: "Unknown", // Default location - you may want to get this from the backend
          clients: caregiver.totalClients,
        })
      );

      return mappedData;
    },
    // Add caching configuration
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Cache data for 30 minutes (previously cacheTime)
    refetchOnWindowFocus: false, // Prevent refetching when window gains focus
    refetchOnMount: false, // Prevent refetching on component mount if data exists
    refetchOnReconnect: false, // Prevent refetching on reconnect if data exists
  });
};
