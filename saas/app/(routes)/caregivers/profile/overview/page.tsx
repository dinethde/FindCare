"use client";

import { Metrics } from "@/components/Metrics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "@/components/cards/Card";
import CaregiverImg from "@/components/CaregiverImg";
import CaregiverDescription from "@/components/CaregiverDescription";
import InformationCard from "@/components/cards/InformationCard";
import { DetailRow } from "@/components/DetailRow";
import { SectionCard } from "@/components/cards/SectionCard";
import { profileData } from "@/data/profile-data";
import verifiedIcon from "@/public/assets/icons/verrified-icon.svg";
import { StatusBadge } from "@/components/StatusBadge";
import { colorProps } from "@/data/ColorProps";

export default function CaregiverOverview() {
  console.log();

  return (
    <Tabs defaultValue="overview" className="flex flex-col gap-8 items-start">
      <TabsList className="flex gap-5 w-full items-start justify-start bg-white border-b border-neutral-4 text-tagline text-neutral-7">
        <TabsTrigger value="overview" className="p-0">
          Overview
        </TabsTrigger>
        <TabsTrigger value="general" className="p-0">
          General
        </TabsTrigger>
        <TabsTrigger value="security" className="p-0">
          Security
        </TabsTrigger>
      </TabsList>

      <div className="w-full">
        <TabsContent
          value="overview"
          className="flex flex-col gap-4 w-full m-0"
        >
          {/* Top Row */}
          <div className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4 h-[270px]">
            <CaregiverImg />

            {/*/!* Description *!/*/}
            <CaregiverDescription />

            <div className="">
              {/*/!* Status Container *!/*/}
              <div className="flex gap-4 flex-col">
                <Card />
                <Card />
              </div>
            </div>
          </div>

          {/* Bottom Row - Metrics */}
          <Metrics />
        </TabsContent>

        <TabsContent value="general" className="m-0">
          <InformationCard />
        </TabsContent>

        <TabsContent
          value="security"
          className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4 h-[270px]"
        >
          <CaregiverImg />
          <SectionCard
            title="Address"
            icon={verifiedIcon}
            className="flex p-4 flex-col gap-4 bg-main2 border-neutral-3 col-span-2"
          >
            <div className="flex justify-between items-center">
              <div className="text-tagline text-grey">Background Status :</div>
              <StatusBadge
                status={profileData.security.isBackgroundChecked}
                color={colorProps.green.hsl}
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-tagline text-grey">Criminal Records :</div>
              <StatusBadge
                status={profileData.security.criminalRecords}
                color={colorProps.green.hsl}
              />
            </div>
            <DetailRow
              label="Last image update :"
              value={profileData.address.address}
            />
            <DetailRow label="Last visit:" value={profileData.address.city} />
            <div className="flex justify-between items-center">
              <div className="text-tagline text-grey">Police report :</div>
              <StatusBadge
                status={profileData.security.policeReport}
                color={colorProps.orange.hsl}
              />
            </div>
          </SectionCard>
        </TabsContent>
      </div>
    </Tabs>
  );
}
