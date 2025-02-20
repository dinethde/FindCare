import { ClientTable } from "@/components/table/ClientTable";
import type { TableConfig } from "@/types/TableTypes";
import { TotalShiftsCard } from "@/components/cards/TotalShiftCard_2";
import { GrowthChart } from "@/components/charts/growth-chart";
import SatisfactionGauge from "@/components/charts/GaugeChart";
import { taskCompletionData } from "@/data/pie-chart/totalShiftCard";
import { colorProps } from "@/data/ColorProps";

const clientConfigWithNOK: TableConfig = {
  title: "Client List",
  columns: [
    { key: "name", header: "Name", width: "15%" },
    { key: "contactInfo", header: "Contact info", width: "15%" },
    { key: "nok", header: "NOK", width: "15%" },
    { key: "careType", header: "Care Type", width: "18%" },
    { key: "primaryCaregiver", header: "Primary Caregiver", width: "15%" },
    { key: "location", header: "locations", width: "10%" },
  ],
  headerAlignments: ["left", "center", "center", "center", "center", "right"],
  showViewAction: true,
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

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-[0.75fr_1.5fr_0.75fr] gap-4">
        <TotalShiftsCard {...taskCompletionData} />
        <GrowthChart />
        <SatisfactionGauge
          value={95}
          date="Oct 2024"
          title="Agency's Satisfaction Rate"
          color={colorProps.pinkishRed.hex}
        />
      </div>

      <ClientTable
        config={clientConfigWithNOK}
        filterOptions={filterOptions}
        tableType="eye"
      />
    </div>
  );
}
