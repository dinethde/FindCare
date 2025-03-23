'use client';

import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useUser } from '@clerk/nextjs';

/**
 * Interface representing the response from the tenant creation API
 * @interface TenantResponse
 */
export interface TenantResponse {
  accountId: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}

/**
 * Interface for the tenant creation request payload
 * @interface TenantRequest
 */
interface TenantRequest {
  auth0Identifier: string;
  email: string;
  tier: string;
}

/**
 * TenantPage Component - Handles tenant creation and routing
 * This component manages the creation of a new tenant account and handles the authentication flow
 * 
 * @component
 * @returns {React.ReactElement} The rendered tenant page component
 */
export default function TenantPage(): React.ReactElement {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const [hasAttemptedCreation, setHasAttemptedCreation] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  /**
   * Creates a new tenant account for the authenticated user
   * @async
   * @function setupTenant
   * @returns {Promise<TenantResponse | void>} The created tenant data or void if operation fails
   * @throws {Error} When tenant creation fails or response is invalid
   */
  const setupTenant = async (): Promise<TenantResponse | void> => {
    if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
      return;
    }

    try {
      setHasAttemptedCreation(true);
      const url = process.env.NEXT_PUBLIC_AGENCY_SERVICE_URL;

      const tenantRequest: TenantRequest = {
        auth0Identifier: user.id,
        email: user.primaryEmailAddress.emailAddress,
        tier: "premium",
      };

      const response: AxiosResponse<TenantResponse> = await axios.post(
        `${url}/accounts`,
        tenantRequest
      );

      if (!response.data?.accountId) {
        throw new Error("Invalid response from server: Missing account ID");
      }

      console.log('Tenant created successfully:', response);
      router.push(`/tenant/${response.data.accountId}/`);
      return response.data;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create tenant";
      console.error('Failed to create tenant:', errorMessage);
      setHasError(true);
      throw new Error(errorMessage);
    }
  };

  /**
   * Effect hook to handle tenant setup process
   * Manages the lifecycle of tenant creation and handles component mounting states
   */
  useEffect(() => {
    let isMounted = true;

    const initializeTenant = async (): Promise<void> => {
      if (!isMounted || hasAttemptedCreation || hasError || !isLoaded || !isSignedIn) {
        return;
      }

      if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
        return;
      }

      await setupTenant();
    };

    initializeTenant();

    return () => {
      isMounted = false;
    };
  }, [isLoaded, isSignedIn, user, hasAttemptedCreation, hasError, router]);

  // Loading state while Clerk authentication is initializing
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner className="w-6 h-6" />
      </div>
    );
  }

  // Redirect to sign-in if user is not authenticated
  if (!isSignedIn) {
    router.push('/sign-in');
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner className="w-6 h-6" />
      </div>
    );
  }

  // Default loading state while tenant creation is in progress
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner className="w-6 h-6" />
    </div>
  );
}