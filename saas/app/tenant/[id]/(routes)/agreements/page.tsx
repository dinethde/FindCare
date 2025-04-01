import CaregiverInformation from "@/components/caregiver-details-ma/CaregiverInformation";
import React from "react";

export default function CaregiversPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <CaregiverInformation />
      </div>
    </main>
  );
}
