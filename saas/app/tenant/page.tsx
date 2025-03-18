'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { createUser } from '@/api/SignUpApi';

/**
 * TenantOnboarding component that handles user registration and redirection
 * This page creates a user entity in our backend when a new user signs up
 */
export default function TenantOnboarding() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Don't do anything until Clerk has loaded user state
    if (!isLoaded) return;

    // If user is not signed in, redirect to sign-in page
    if (!isSignedIn) {
      router.push('/sign-in');
      return;
    }

    // Register user in our backend and redirect to their tenant page
    registerUserAndRedirect();
  }, [isLoaded, isSignedIn, router, user]);

  const registerUserAndRedirect = async () => {
    try {
      if (!user) return;

      const userData = {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
      };

      const response = await createUser(userData);

      // Redirect to the tenant-specific homepage
      router.push(`/tenant/${response.userId}/`);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Setting up your account</h2>
          <p className="text-gray-600">Please wait while we prepare your dashboard...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center text-red-600 p-4 border border-red-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Error during onboarding</h2>
          <p>{error}</p>
          <button
            onClick={() => router.push('/sign-in')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  // This should rarely be visible as we'll usually be in loading or error state, or redirected
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p>Setting up your account... Please wait.</p>
      </div>
    </div>
  );
}
