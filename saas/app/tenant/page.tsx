// pages/onboarding.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { createUser } from '@/utils/api-calls/create-tenant';

export default function Onboarding() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoaded) return; // Wait for Clerk to load the user state

    if (!isSignedIn) {
      // If the user is not signed in, redirect to the sign in page
      router.push('/sign-in');
      return;
    }
    const callBackendAndRedirect = async () => {

      try {
        const userData = {
          uniqueIdentifier: user.id,
          username: user.primaryEmailAddress?.emailAddress || '',
          // Add other necessary fields if needed
        };
        const response = await createUser(userData);
        console.log('User created successfully:', response);
        // Redirect to the tenant-specific homepage, e.g. /tenant/tenant123/
        router.push(`/tenant/${response.userId}/`);
      } catch (err) {
        console.error(err);
      }
    };

    callBackendAndRedirect();
  }, [isLoaded, isSignedIn, router, user]);

  if (error) {
    return <div>Error during onboarding: {error}</div>;
  }

  return <div>Setting up your account... Please wait.</div>;
}
