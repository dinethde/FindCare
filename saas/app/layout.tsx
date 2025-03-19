import type { Metadata } from "next";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import QueryClientProvider from "@/components/providers/QueryClientProvider";

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
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>
          <QueryClientProvider>
            {children}
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
