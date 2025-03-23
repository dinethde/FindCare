'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useUser } from '@clerk/nextjs';

export interface TenantResponse {
  accountId: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}

export default function TenantPage() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const [hasAttemptedCreation, setHasAttemptedCreation] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setupTenant = async () => {
      if (!isLoaded || !isSignedIn || !user?.id || !user?.primaryEmailAddress?.emailAddress) {
        setIsLoading(false);
        return;
      }

      if (hasAttemptedCreation || hasError) {
        setIsLoading(false);
        return;
      }

      try {
        setHasAttemptedCreation(true);
        const url = process.env.NEXT_PUBLIC_AGENCY_SERVICE_URL;
        
        const tenant = {
          auth0Identifier: user.id,
          email: user.primaryEmailAddress.emailAddress,
          tier: "premium",
        };

        const response = await axios.post<TenantResponse>(
          `${url}/accounts`,
          tenant
        );

        if (!response.data || !response.data.accountId) {
          throw new Error("Invalid response from server: Missing account ID");
        }

        router.push(`/tenant/${response.data.accountId}/`);
      } catch (error) {
        console.error('Failed to create tenant:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    setupTenant();
  }, [isLoaded, isSignedIn, user, hasAttemptedCreation, hasError, router]);

  if (!isLoaded || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner className="w-6 h-6" />
      </div>
    );
  }

  if (!isSignedIn) {
    router.push('/sign-in');
    return null;
  }

  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error creating tenant. Please try again later.</div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner className="w-6 h-6" />
    </div>
  );
}