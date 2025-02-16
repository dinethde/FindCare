import Card from "@/components/cards/Card";
import { SectionCard } from "@/components/cards/SectionCard";
import CaregiverDescription from "@/components/CaregiverDescription";
import CaregiverImg from "@/components/CaregiverImg";
import { DetailRow } from "@/components/DetailRow";
import { StatusBadge } from "@/components/StatusBadge";
import { profileData } from "@/data/client-modal/clientProfileData";
import { colorProps } from "@/data/ColorProps";
import personalDetailsIcons from "@/public/assets/icons/personal-details-icon.svg";
import clientImage from "@/public/images/photo-rovi.png";

export default function page() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4 h-[250px] ">
        <CaregiverImg image={clientImage.src} imgSize={260} />

        {/*/!* Description *!/*/}
        <CaregiverDescription />

        <div className="">
          {/*/!* Status Container *!/*/}
          <div className="flex gap-4 flex-col ">
            <Card
              title="Primary Caregiver"
              color="#FF2D55"
              btnVarient="seeMore"
              revenue={"Dineth Silva"}
              dataType=""
            />
            <Card
              title="Agreement"
              btnVarient="seeMore"
              revenue={"04/07/2022  -  04/09/2022"}
              contentClassName="text-regular-text-thicker text-neutral-12"
              dataType=""
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <SectionCard
          title="Personal Information"
          icon={profileData.personal.icon}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
          stackVertical={false}
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="Name :" value={profileData.personal.fullName} />
            <DetailRow
              label="Date of Birth :"
              value={`${profileData.personal.dateOfBirth} - ${profileData.personal.age} age`}
            />
            <DetailRow label="Gender :" value={profileData.personal.gender} />
            <DetailRow label="NIC :" value={profileData.personal.nic} />
          </div>
        </SectionCard>

        <SectionCard
          title="Care Recipient Details"
          icon={profileData.careRecipient.icon}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
          stackVertical={false}
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="ID :" value={profileData.careRecipient.id} />
            <DetailRow
              label="Registered Date :"
              value={profileData.careRecipient.registeredDate}
            />
            <DetailRow
              label="Signature :"
              value={profileData.careRecipient.signature}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="Account Information"
          icon={profileData.account.icon}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
          stackVertical={false}
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="Phone :" value={profileData.account.phone} />
            <DetailRow label="Email :" value={profileData.account.email} />
            <DetailRow label="Password :" value={profileData.account.pwd} />
            <div className="flex justify-between items-center">
              <div className="text-tagline text-grey">Background Status :</div>
              <StatusBadge
                status={profileData.account.status}
                color={colorProps.green.hsl}
              />
            </div>
          </div>
        </SectionCard>
      </div>
      <div className="flex gap-4 w-full">
        <SectionCard
          title="Address Information"
          icon={profileData.address.icon}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-3/6"
          stackVertical={false}
        >
          <div className="flex flex-col gap-4">
            <DetailRow label="Address :" value={profileData.address.address} />
            <DetailRow label="City :" value={profileData.address.city} />
            <DetailRow
              label="Postal Code :"
              value={profileData.address.postalCode}
            />
          </div>
        </SectionCard>

        <SectionCard
          title="NOK Information"
          icon={profileData.nok.icon}
          className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 w-full"
          stackVertical={false}
        >
          <div className="flex gap-12">
            <div className="flex flex-col gap-4 w-full">
              <DetailRow label="Name :" value={profileData.nok.name} />
              <DetailRow label="Relation :" value={profileData.nok.relation} />
              <DetailRow label="Phone :" value={profileData.nok.phone} />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <DetailRow label="Email :" value={profileData.nok.email} />
              <DetailRow label="Address :" value={profileData.nok.address} />
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
