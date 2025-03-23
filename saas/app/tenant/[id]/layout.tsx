"use client"

import React from 'react';
import type { Metadata } from "next";
import NavbarComponent from "@/components/layout-components/NavbarComponent";

/**
 * Interface for TenantLayout component props
 * @interface TenantLayoutProps
 */
interface TenantLayoutProps {
  /** Child components to be rendered within the layout */
  children: React.ReactNode;
}

/**
 * Metadata configuration for the tenant dashboard
 * @constant
 */


/**
 * TenantLayout Component - Provides the layout structure for tenant dashboard pages
 * This component wraps all tenant-specific pages and provides common layout elements
 * such as navigation and main content area
 * 
 * @component
 * @param {TenantLayoutProps} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout
 * @returns {React.ReactElement} The rendered layout component
 */
export default function TenantLayout({
  children,
}: Readonly<TenantLayoutProps>): React.ReactElement {
  return (
    <div className="min-h-screen flex">
      <NavbarComponent />
      <main className="w-full max-h-screen overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
