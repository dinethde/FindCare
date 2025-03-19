'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { useCreateTenant } from '@/utils/hooks/use-create-tenant';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function TenantPage() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const { createTenantAccount, isCreating } = useCreateTenant();

  useEffect(() => {
    const setupTenant = async () => {
      if (!isLoaded) return;
      if (!isSignedIn) {
        router.push('/sign-in');
        return;
      }

      if (user?.id && user?.emailAddresses?.[0]?.emailAddress) {
        // Check if we've already created an account for this user
        const accountCreatedKey = `tenant-account-created-${user.id}`;
        // const hasAccountBeenCreated = localStorage.getItem(accountCreatedKey);
        const hasAccountBeenCreated = false;

        if (!hasAccountBeenCreated) {
          const userData = {
            id: user.id,
            email: user.emailAddresses[0].emailAddress,
          };

          try {
            await createTenantAccount(userData);
            // Mark that we've created an account for this user
            // localStorage.setItem(accountCreatedKey, 'true');
          } catch (error) {
            console.error('Failed to create tenant:', error);
            // Only log the error but don't set the flag so it can retry next time
          }
        }
      }
    };

    setupTenant();
  }, [isLoaded, isSignedIn, router, user]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner className="w-6 h-6" />
    </div>
  );
}
