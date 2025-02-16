"use client";
import { CaregiverTable } from "@/components/table/CaregiverTable";
import { FeedbackTable } from "@/components/table/FeedbackTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableConfig } from "@/types/TableTypes";
import { Link } from "lucide-react";

export default function CgClientsModal() {
  const caregiverConfig: TableConfig = {
    title: "Client List",
    columns: [
      { key: "name", header: "Name", width: "15%" },
      { key: "contactInfo", header: "Schedule", width: "25%" },
      { key: "careType", header: "Care Type", width: "15%" },
      { key: "rate", header: "Rate", width: "12%" },
      { key: "location", header: "location", width: "15%" },
    ],
    headerAlignments: ["left", "center", "center", "center", "right"],
  };

  interface FilterOption {
    key: string;
    label: string;
    type: "number" | "text" | "checkbox";
    options?: string[];
  }

  const filterOptions: FilterOption[] = [
    { key: "name", label: "Name", type: "text" },
    {
      key: "careType",
      label: "Care Type",
      type: "checkbox",
      options: ["Domici Care", "Senior Care", "Child Care"],
    },
    { key: "location", label: "Location", type: "text" },
  ];

  return (
    <Tabs defaultValue="assigned" className="flex flex-col gap-8 items-start">
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
          <CaregiverTable
            caregiverConfig={caregiverConfig}
            filterOptions={filterOptions}
            tableType="fill"
          />
        </TabsContent>
        <TabsContent value="feedback" className="m-0">
          <FeedbackTable />
        </TabsContent>
      </div>
    </Tabs>
  );
}
