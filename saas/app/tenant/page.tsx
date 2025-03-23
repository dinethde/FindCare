'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useUser } from '@clerk/nextjs';

/**
 * Interface representing the response from tenant creation
 */
export interface TenantResponse {
  accountId: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}

/**
 * TenantPage component handles tenant creation and routing after user registration
 * @returns JSX.Element The rendered tenant page component
 */
export default function TenantPage(): JSX.Element {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const [hasAttemptedCreation, setHasAttemptedCreation] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /**
   * Effect hook to handle tenant setup and creation
   * Runs when authentication state or user data changes
   */
  useEffect(() => {
    /**
     * Attempts to create a new tenant for the authenticated user
     */
    const setupTenant = async (): Promise<void> => {
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

  // Show loading spinner while authentication is being checked
  if (!isLoaded || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner className="w-6 h-6" />
      </div>
    );
  }

  // Redirect to sign-in if user is not authenticated
  if (!isSignedIn) {
    router.push('/sign-in');
    return null;
  }

  // Show error message if tenant creation failed
  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error creating tenant. Please try again later.</div>
      </div>
    );
  }

  // Show loading spinner while tenant is being created
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner className="w-6 h-6" />
    </div>
  );
}