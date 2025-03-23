"use client"

import { SignUp } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

/**
 * SignUpContent component handles the client-side rendering of the sign-up form
 * @returns JSX.Element The rendered sign-up form component
 */
function SignUpContent(){
  // State to track form submission status
  const [isSubmitting] = useState(false);
  // State to handle client-side mounting
  const [isMounted, setIsMounted] = useState(false);

  /**
   * Effect hook to set component as mounted on client-side
   */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null during server-side rendering
  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="top-center" />
      {/* Loading overlay shown during form submission */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md">
            Processing your registration...
          </div>
        </div>
      )}
      {/* Clerk's SignUp component with custom styling */}
      <SignUp
        forceRedirectUrl="/tenant"
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

/**
 * Main page component that renders the SignUpContent
 * @returns JSX.Element The rendered page component
 */
export default function Page() {
  return <SignUpContent />;
}
