import type { Metadata } from "next";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import QueryClientProvider from "@/components/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/toaster";

/**
 * Interface for RootLayout component props
 * @interface RootLayoutProps
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Metadata configuration for the entire application
 * @constant metadata
 */
export const metadata: Metadata = {
  title: "FindCare",
  description: "FindCare - Connecting caregivers to households",
};

/**
 * Root layout component that wraps the entire application
 * Provides authentication, query client, and toast notification contexts
 * 
 * @component RootLayout
 * @param {RootLayoutProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered
 * @returns {React.ReactElement} The root layout structure of the application
 */
export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <QueryClientProvider>
            {children}
            <Toaster />
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
