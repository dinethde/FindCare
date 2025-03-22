import type { Metadata } from "next";
import NavbarComponent from "@/components/layout-components/NavbarComponent";

export const metadata: Metadata = {
  title: "FindCare - Tenant Dashboard",
  description: "Tenant dashboard for FindCare application",
};

export default function TenantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div className="min-h-screen flex">
      <NavbarComponent />
      <main className="w-full max-h-screen overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
