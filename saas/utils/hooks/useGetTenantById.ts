"use client";

import { useQuery } from "@tanstack/react-query";
import { getTenantById } from "../api-calls/get-tenant-by-id";

export const useGetTenantById = (id: number) => {
  return useQuery({
    queryKey: ["tenant", id],
    queryFn: () => getTenantById(id),
    // Add caching configuration
    staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Cache data for 30 minutes (previously cacheTime)
    refetchOnWindowFocus: false, // Prevent refetching when window gains focus
    refetchOnMount: false, // Prevent refetching on component mount if data exists
    refetchOnReconnect: false, // Prevent refetching on reconnect if data exists
  });
};
