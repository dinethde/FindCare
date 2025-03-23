/**
 * Import profile data from dashboard
 */
import { profile } from "@/data/dashboard-2";
import { JSX } from "react";

/**
 * CaregiverDescription Component
 * @description Displays the about/description section for a caregiver profile
 * @returns {JSX.Element} A div containing the caregiver's description or default text
 */
export default function CaregiverDescription(): JSX.Element {
  return (
    // Container div for the description
    <div className="h-full w-full">
      {/* Description paragraph with styling */}
      <p className="h-full w-full relative rounded-small bg-small-card border-[1px] border-solid box-border border-neutral-4  overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-left text-[0.875rem] text-colors-grey-darker font-plus-jakarta-sans">
        {profile.about ?? "No about has written for this user"}
      </p>
    </div>
  );
}
