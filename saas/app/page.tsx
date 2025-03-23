import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { JSX } from "react";

/**
 * Interface defining the homepage props
 * In this case, we don't have props but we define it for clarity and future extensibility
 */
interface HomePageProps {}

/**
 * Metadata configuration for the homepage
 * @const metadata
 */
export const metadata: Metadata = {
  title: "FindCare Home",
  description: "FindCare application home page",
};

/**
 * HomePage component - The main landing page of the FindCare application
 * @async
 * @function HomePage
 * @returns {Promise<JSX.Element>} The rendered homepage component
 */
export default async function HomePage(): Promise<JSX.Element> {
  // Get the current user from Clerk authentication
  const user = await currentUser();
  const userid = Number(user?.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">
        User {userid} - Welcome to FindCare
      </h1>
      <Link href="/tenant/1" className="text-blue-500 hover:underline">
        Go to tenant dashboard
      </Link>
      <div className="flex ">
        <SignedOut>
          <SignInButton
            mode="modal"
            forceRedirectUrl={
              process.env.NEXT_PUBLIC_SIGN_IN_FORCE_REDIRECT_URL
            }
          />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
