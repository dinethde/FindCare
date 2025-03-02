import type { TableConfig, FilterOption, Match } from "../types/TableTypes";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const matchesConfig: TableConfig<Match> = {
  title: "Matches",
  columns: [
    { key: "name", header: "Name", width: "15%" },
    { key: "careType", header: "Care Type", width: "15%" },
    { key: "rate", header: "Rate", width: "10%" },
    { key: "location", header: "location", width: "15%" },
    { key: "reason", header: "Reason", width: "30%" },
    {
      key: "id",
      header: "",
      width: "15%",
      render: (_, item) => (
        <Button className="bg-[#ff9966] hover:bg-[#ff7733] text-white rounded-full px-6">
          Send Request <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      ),
    },
  ],
};

export const matchesFilterOptions: FilterOption[] = [
  { key: "name", label: "Name", type: "text" },
  {
    key: "careType",
    label: "Care Type",
    type: "checkbox",
    options: ["Domici Care", "Senior Care", "Child Care"],
  },
  { key: "location", label: "Location", type: "text" },
  {
    key: "isBestMatch",
    label: "Best Matches Only",
    type: "checkbox",
    options: ["true"],
  },
];
