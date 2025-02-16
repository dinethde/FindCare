import { profile } from "@/data/dashboard-2";

export default function CaregiverDescription() {
  return (
    <div className="h-full w-full">
      <p className="h-full w-full relative rounded-small bg-small-card border-[1px] border-solid box-border border-neutral-4  overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-left text-[0.875rem] text-colors-grey-darker font-plus-jakarta-sans">
        {profile.about ?? "No about has written for this user"}
      </p>
    </div>
  );
}
