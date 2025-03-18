import type { Metadata } from "next";
import "./tenant/[id]/globals.css"; // Updated path to the located CSS file
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "FindCare",
  description: "FindCare - Connecting caregivers to households",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>

          <header className="flex ">
            <SignedOut>
              <SignInButton mode="modal" /*forceRedirectUrl={process.env.CLERK_SIGN_IN_FORCE_REDIRECT_URL}*/ />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
            
          </header>
          

          {children}

          </body>
      </html>
    </ClerkProvider>
  );
}
