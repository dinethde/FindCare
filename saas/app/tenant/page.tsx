'use client';

import { LoadingSpinner } from '@/components/ui/loading-spinner';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useUser } from '@clerk/nextjs';

export interface TenantResponse {
  accountId: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}
export default function TenantPage() {
  // const router = useRouter();
  // const { user, isLoaded, isSignedIn } = useUser();
  // const [hasAttemptedCreation, setHasAttemptedCreation] = useState(false);
  // const [hasError, setHasError] = useState(false);

  // // const user = {
  // //   id: '10', // Replace with actual user ID
  // //   primaryEmailAddress: {
  // //     emailAddress: 'randandu'
  // //   }
  // // }

  // useEffect(() => {
  //   let isMounted = true;

  //   const setupTenant = async () => {
  //     // Prevent running if component is unmounted
  //     if (!isMounted) return;

  //     // Don't proceed if already attempted or has error
  //     if (hasAttemptedCreation || hasError) {
  //       return;
  //     }

  //     // Don't proceed if Clerk hasn't loaded yet or user isn't signed in
  //     if (!isLoaded || !isSignedIn) {
  //       return;
  //     }

  //     // Don't proceed if don't have required user data
  //     if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
  //       return;
  //     }

  //     try {
  //       setHasAttemptedCreation(true);

  //       const url = process.env.NEXT_PUBLIC_AGENCY_SERVICE_URL;

  //       const tenant = {
  //         auth0Identifier: user.id,
  //         email: user.primaryEmailAddress.emailAddress,
  //         tier: "premium",
  //       };
  //       try {
  //         const response = await axios.post<TenantResponse>(
  //           `${url}/accounts`,
  //           tenant
  //         );

  //         if (!response.data || !response.data.accountId) {
  //           throw new Error("Invalid response from server: Missing account ID");
  //         }

  //         console.log('Tenant created successfully:', response);
  //         router.push(`/tenant/${response.data.accountId}/`);

  //         return response.data;
  //       } catch (error) {
  //         throw new Error(
  //           error instanceof Error ? error.message : "Failed to create tenant"
  //         );
  //       }

  //     } catch (error) {
  //       console.error('Failed to create tenant:', error);
  //       if (isMounted) {
  //         setHasError(true);
  //       }
  //     }
  //   };

  //   setupTenant();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [isLoaded, isSignedIn, user, hasAttemptedCreation, hasError, router]); // Added router to dependencies


  // if (!isLoaded) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <LoadingSpinner className="w-6 h-6" />
  //     </div>
  //   );
  // }


  // if (!isSignedIn) {
  //   router.push('/sign-in');
  //   return null;
  // }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner className="w-6 h-6" />
      <h1 className="text-2xl font-bold mb-4">Tenant</h1>
    </div>
  );
}