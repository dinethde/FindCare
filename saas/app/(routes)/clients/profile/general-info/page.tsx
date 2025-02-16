import { SectionCard } from "@/components/cards/SectionCard";
import { DetailRow } from "@/components/DetailRow";
import { profileData } from "@/data/client-modal/clientProfileData";
import personalDetailsIcons from "@/public/assets/icons/personal-details-icon.svg";

export default function page() {
  return (
    <div>
      <div className="flex gap-4 w-full">
        <SectionCard
          title="Personal Information"
          icon={personalDetailsIcons}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="Name" value={profileData.personal.fullName} />
            <DetailRow
              label="Date of Birth"
              value={`${profileData.personal.dateOfBirth} - ${profileData.personal.age} age`}
            />
            <DetailRow label="Gender" value={profileData.personal.gender} />
            <DetailRow label="NIC" value={profileData.personal.nic} />
          </div>
        </SectionCard>

        <SectionCard
          title="Care Recipient Details"
          icon={personalDetailsIcons}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="ID" value={profileData.careRecipient.id} />
            <DetailRow
              label="Registered Date"
              value={profileData.careRecipient.registeredDate}
            />
            <DetailRow
              label="Signature"
              value={profileData.careRecipient.signature}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Account Information"
          icon={personalDetailsIcons}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="Phone" value={profileData.account.phone} />
            <DetailRow label="Email" value={profileData.account.email} />
            <DetailRow label="Password" value={profileData.account.pwd} />
            <DetailRow label="Status" value={profileData.account.status} />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
