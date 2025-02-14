import React from "react";
import { DetailRow } from "@/components/DetailRow";
import { SectionCard } from "@/components/cards/SectionCard";
import { StatusBadge } from "@/components/StatusBadge";
import { profileData } from "@/data/profile-data";
import CaregiverDescription from "../CaregiverDescription";
import CaregiverImg from "../CaregiverImg";
import accountIcon from "@/public/assets/icons/account-icon.svg";
import employeeIcon from "@/public/assets/icons/employee-icon.svg";
import locationIcon from "@/public/assets/icons/location.svg";
import personalDetailsIcons from "@/public/assets/icons/personal-details-icon.svg";
import { colorProps } from "@/data/ColorProps";

export default function InformationCard() {
  return (
    <div className="container flex gap-4 flex-col">
      {/* 1st row */}
      <div className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4">
        {/* Profile Image */}
        <CaregiverImg />

        {/* About Section */}
        <CaregiverDescription />

        {/* Personal Details */}
        <SectionCard
          title="Personal details"
          icon={personalDetailsIcons}
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

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Address Section */}
        <SectionCard
          title="Address"
          icon={locationIcon}
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
          icon={employeeIcon}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3"
        >
          <DetailRow label="Id:" value={profileData.employee.id} />
          <DetailRow label="Hire date:" value={profileData.employee.hireDate} />
          <div className="flex justify-between items-center">
            <div className="text-tagline text-grey">Status:</div>
            <StatusBadge
              status={profileData.employee.status}
              color={colorProps.green.hsl}
            />
          </div>
        </SectionCard>

        {/* Account Details */}
        <SectionCard
          title="Account details"
          icon={accountIcon}
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
