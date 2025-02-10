import { Expand } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "@/components/ui/button";
import type { Caregiver } from "@/types/caregiver";
import { CARE_TYPE_VARIANTS } from "@/data/caregivers";

type CaregiverItemProps = Caregiver;

export function CaregiverItem({
  name,
  contactInfo,
  careType,
  rate,
  location,
}: CaregiverItemProps) {
  return (
    <div className="items-center py-4 border-b border-neutral-3 text-regular-text text-neutral-10 grid grid-cols-6">
      <div className="w-48">
        <span className="">{name}</span>
      </div>
      <div className="w-48">
        <span className="">{contactInfo}</span>
      </div>
      <div className="w-48">
        <Badge variant={CARE_TYPE_VARIANTS[careType]}>{careType}</Badge>
      </div>
      <div className="w-24">
        <span className="">{rate}</span>
      </div>
      <div className="w-48">
        <span className="">{location}</span>
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <Expand className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
