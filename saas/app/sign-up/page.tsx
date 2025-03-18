"use client";

import { SignUp, useSignUp } from "@clerk/nextjs";
import { createUser } from "@/api/SignUp";

export default function Page() {
  const { signUp, setActive } = useSignUp();

  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp
        forceRedirectUrl={
          process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL
        }
      />
    </div>
  );
}
