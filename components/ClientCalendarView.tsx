import { Calendar } from "./Calendar";
import type { AgencyData } from "../types/ScheduleTypes";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ClipboardList } from "lucide-react";
import planIcon from "@/public/assets/icons/plan-icon.svg";

interface ClientCalendarViewProps {
  agencyData: AgencyData;
  selectedClientId: string;
}

export function ClientCalendarView({
  agencyData,
  selectedClientId,
}: ClientCalendarViewProps) {
  // Find primary caregiver (for demo, using first caregiver)
  const primaryCaregiver = Object.values(agencyData.caregivers)[0];

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <Calendar
          agencyData={agencyData}
          view="client"
          selectedId={selectedClientId}
        />
      </div>
      <div className="w-64 flex flex-col gap-4 ">
        {/* Primary Caregiver Card */}
        <Card className="border-none space-y-3">
          <CardHeader className="p-0">
            <CardTitle className="text-h6">Primary Caregiver</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FFF5E6] border border-brand-colors-brand5">
              <Image
                src={primaryCaregiver.profileImage || "/placeholder.svg"}
                alt={primaryCaregiver.name}
                width={48}
                height={48}
                className="rounded-small w-12 h-12"
              />
              <div>
                <div className="text-regular-text-thicker text-neutral-10">
                  {primaryCaregiver.name}
                </div>
                <div className="text-sm text-gray-500">Id: CG1001</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Care Plan Card */}
        <Card className="p-4 space-y-4">
          <CardHeader className="flex flex-row items-center gap-2 p-0">
            {/* <ClipboardList className="w-5" /> */}
            <Image src={planIcon} alt="plan-icon" width={25} height={25} />
            <CardTitle className="-mt-[6px] text-h6">Care Plan</CardTitle>
          </CardHeader>
          <div className="h-[1px] bg-neutral-4 w-full"></div>
          <CardContent className="space-y-4 p-0">
            <div className="flex text-tagline justify-between items-center">
              <span className=" text-neutral-7">Plan name :</span>
              <span className="text-neutral-11 font-medium">02/12/2022</span>
            </div>
            <Separator />
            <div className="flex text-tagline justify-between items-center">
              <span className=" text-neutral-7">Price :</span>
              <span className="text-neutral-11 font-medium">02/12/2022</span>
            </div>
            <Separator />
            <div className="flex text-tagline justify-between items-center">
              <span className=" text-neutral-7">Care hours :</span>
              <span className="text-neutral-11 font-medium">36</span>
            </div>
            <Separator />
            <p className="text-small-text text-neutral-8 ">
              Lorem ipsum dolor sit amet consectetur. Interdum sed vitae aliquet
              eget.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
