"use client";
import { CaregiverTable } from "@/components/CaregiverTable";
import { FeedbackTable } from "@/components/FeedbackTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CgClientsModal() {
  return (
    <Tabs defaultValue="overview" className="flex flex-col gap-8 items-start">
      <TabsList className="flex gap-5 w-full items-start justify-start bg-white border-b border-neutral-4 text-tagline text-neutral-7">
        <TabsTrigger value="assigned" className="p-0">
          Assigned Clients
        </TabsTrigger>
        <TabsTrigger value="feedback" className="p-0">
          Feedback
        </TabsTrigger>
      </TabsList>

      <div
        className="w-full
      "
      >
        <TabsContent
          value="assigned"
          className="flex flex-col gap-4 w-full m-0 text-ne"
        >
          <CaregiverTable />
        </TabsContent>

        <TabsContent value="feedback" className="m-0">
          <FeedbackTable />
        </TabsContent>
      </div>
    </Tabs>
  );
}
