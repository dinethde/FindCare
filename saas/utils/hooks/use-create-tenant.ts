import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTenant, User } from "@/utils/api-calls/create-tenant-acc";

export function useCreateTenant() {
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();

  const createTenantAccount = async (user: User) => {
    setIsCreating(true);

    try {
      const response = await createTenant(user);
      router.push(`/tenant/${response.accountId}/`);
      return response;
    } finally {
      setIsCreating(false);
    }
  };

  return { createTenantAccount, isCreating };
}
