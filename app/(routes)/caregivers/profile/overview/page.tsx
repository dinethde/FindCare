"use client";

import { Metrics } from "@/components/metrics";
import { profile } from "@/data/dashboard-2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Card from "@/components/Card";
import CaregiverImg from "@/components/CaregiverImg";
import CaregiverDescription from "@/components/CaregiverDescription";
import InformationCard from "@/components/InformationCard";

export default function CaregiverOverview() {
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

      <TabsContent value="overview" className="flex flex-col gap-4 w-full">
        {/* Top Row */}
        <div className="grid grid-cols-[0.75fr_1.25fr_1fr]  gap-4">
          <CaregiverImg />

          {/*/!* Description *!/*/}
          <CaregiverDescription />

          <div className="">
            {/*/!* Stats Container *!/*/}
            <div className="flex gap-4 flex-col">
              <Card />
              <Card />
            </div>
          </div>
        </div>

        {/* Bottom Row - Metrics */}
        <Metrics />
      </TabsContent>

      <TabsContent value="general">
        <InformationCard />
        <div className="">
          {/* <CaregiverImg /> */}
          {/*/!* Description *!/*/}
          {/* <CaregiverDescription /> */}
        </div>
      </TabsContent>

      <TabsContent value="security">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Security Settings</h3>
          <p className="text-muted-foreground">
            Security settings and information will be displayed here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
