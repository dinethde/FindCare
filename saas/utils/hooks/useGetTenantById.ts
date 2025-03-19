import { useQuery } from "@tanstack/react-query"
import { getTenantById } from "../api-calls/get-tenant-by-id"

export const useGetTenantById = (id: number) => {
    return useQuery({
        queryKey: ["document", id],
        queryFn: () => getTenantById(id),
    })
}