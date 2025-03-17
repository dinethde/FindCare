import type { Metadata } from "next";
import "./tenant/[id]/globals.css"; // Updated path to the located CSS file

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
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}