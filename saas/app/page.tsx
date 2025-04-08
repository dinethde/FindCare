// import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "FindCare Home",
  description: "FindCare application home page",
};

export default async function HomePage() {
  // const user = await currentUser();
  // const userid = Number(user?.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">
        {/* User {userid} - Welcome to FindCare */}
      </h1>
      <Link href="/tenant/1" className="text-blue-500 hover:underline">
        Go to tenant dashboard
      </Link>
      {/* <div className="flex ">
        <SignedOut>
          <SignInButton
            mode="modal"
            forceRedirectUrl={
              process.env.NEXT_PUBLIC_SIGN_IN_FORCE_REDIRECT_URL
            }
          />
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div> */}
    </div>
  );
}
