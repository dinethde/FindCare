"use client";

import { SignUp, useSignUp, useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createUser } from "@/api/SignUpApi";

export default function Page() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { isSignedIn } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Redirect already signed in users
  useEffect(() => {
    if (isSignedIn) {
      const redirectUrl = process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || '/';
      router.push(redirectUrl);
    }
  }, [isSignedIn, router]);

  // Monitor sign-up status changes
  useEffect(() => {
    if (!isLoaded || !signUp) return;

    // Check if user has completed sign-up
    const checkSignUpStatus = async () => {
      if (signUp.status === "complete") {
        try {
          setIsSubmitting(true);

          // Get user data from Clerk
          const userData = {
            email: signUp.emailAddress || "",
            firstName: signUp.firstName || "",
            lastName: signUp.lastName || "",
            clerkId: signUp.createdUserId || "",
          };

          // Call backend API
          await createUser(userData);

          // Set the newly created session as active
          if (signUp.createdSessionId) {
            await setActive({ session: signUp.createdSessionId });
            const redirectUrl = process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || '/';
            router.push(redirectUrl);
          }

          toast.success("Sign up successful!");
        } catch (error) {
          console.error("Error during sign-up:", error);
          toast.error("Failed to complete sign-up. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    checkSignUpStatus();
  }, [isLoaded, signUp, setActive, router]);

  if (isSignedIn) {
    return null; // Prevent rendering the sign-up form if already signed in
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="top-center" />
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md">
            Processing your registration...
          </div>
        </div>
      )}
      <SignUp
        afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}
        redirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
          },
        }}
      />
    </div>
  );
}
