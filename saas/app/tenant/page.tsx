"use client";

import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
export default function TenantPage() {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use effect to handle the signup process
  // This effect will run when the component mounts and when the user changes
  useEffect(() => {
    const signupUser = async () => {
      if (!user) {
        console.log("Debug: User not available yet, waiting...");
        return;
      }

      try {
        console.log("Debug: Starting tenant signup process");
        setLoading(true);
        setError(null);

        // Get user identifier and email from Clerk
        const userIdentifier = user.id;
        const userEmail = user.primaryEmailAddress?.emailAddress;

        // Debugging information
        console.log("Debug: User data retrieved", {
          userIdentifier,
          userEmail,
          hasEmail: !!userEmail,
        });

        // Check if userEmail is available
        if (!userEmail) {
          console.error("Debug: Email not available from auth provider");
          setError("Email not available");
          setLoading(false);
          return;
        }

        // Call the API service function
        // const responseData = await signupTenant(userIdentifier, userEmail);

        // console.log(
        //   "Debug: Signup successful, navigating to tenant page",
        //   responseData
        // );

        // Navigate to tenant-specific page with the returned ID
        router.push(`/tenant/1`);
      } catch (err) {
        console.error("Debug: Error during signup process:", err);
        setError("Failed to sign up. Please try again.");
        setLoading(false);
      }
    };

    signupUser();
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {loading && (
        <>
          <LoadingSpinner />
          <p className="mt-4 text-gray-600">Setting up your account...</p>
        </>
      )}

      {error && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-500">Error</h1>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Return Home
          </button>
        </div>
      )}
    </div>
  );
}
