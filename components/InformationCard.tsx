import React from "react";
import Image from "next/image";
import { MapPin, User, UserCircle, Building2 } from "lucide-react";
import { DetailRow } from "@/components/detail-row";
import { SectionCard } from "@/components/section-card";
import { StatusBadge } from "@/components/status-badge";
import { profileData } from "@/data/profile-data";
import photo from "@/public/images/photo.png";
import CaregiverDescription from "./CaregiverDescription";
import CaregiverImg from "./CaregiverImg";

export default function InformationCard() {
  return (
    <div className="container flex gap-4 flex-col">
      <div className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4">
        {/* Profile Image */}
        <CaregiverImg />

        {/* About Section */}
        <CaregiverDescription />

        {/* Personal Details */}
        <SectionCard
          title="Personal details"
          icon={UserCircle}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3"
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="Name" value={profileData.personal.name} />
            <DetailRow
              label="Date of Birth"
              value={`${profileData.personal.dateOfBirth} - ${profileData.personal.age} age`}
            />
            <DetailRow label="Gender" value={profileData.personal.gender} />
            <DetailRow label="NIC" value={profileData.personal.nic} />
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Address Section */}
        <SectionCard
          title="Address"
          icon={MapPin}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3"
        >
          <DetailRow label="Address:" value={profileData.address.address} />
          <DetailRow label="City:" value={profileData.address.city} />
          <DetailRow
            label="Postal Code:"
            value={profileData.address.postalCode}
          />
        </SectionCard>

        {/* Employee Details */}
        <SectionCard
          title="Employee details"
          icon={Building2}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3"
        >
          <DetailRow label="Id:" value={profileData.employee.id} />
          <DetailRow label="Hire date:" value={profileData.employee.hireDate} />
          <div className="flex justify-between items-center">
            <div className="text-tagline text-grey">Status:</div>
            <StatusBadge status={profileData.employee.status} />
          </div>
        </SectionCard>

        {/* Account Details */}
        <SectionCard
          title="Account details"
          icon={User}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3"
        >
          <DetailRow label="Phone:" value={profileData.account.phone} />
          <DetailRow label="Email:" value={profileData.account.email} />
          <DetailRow label="PWD:" value={profileData.account.pwd} />
        </SectionCard>
      </div>
    </div>
  );
}
