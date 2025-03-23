import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata configuration for the application
 */
export const metadata: Metadata = {
  title: "FindCare - Healthcare Management Platform",
  description: "A comprehensive healthcare management platform for agencies and caregivers",
};

/**
 * Props interface for the RootLayout component
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component that wraps all pages
 * Provides authentication context and global styles
 * @param props Component properties containing children elements
 * @returns JSX.Element The rendered layout with authentication provider
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
