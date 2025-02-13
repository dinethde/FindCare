import { DynamicTable } from "./DynamicTable";
import { feedbackData } from "../../data/TableData";
import type { TableConfig } from "../../types/TableTypes";

const feedbackConfig: TableConfig = {
  title: "Feedback List",
  columns: [
    { key: "name", header: "Name", width: "15%" },
    { key: "careType", header: "Care Type", width: "20%" },
    { key: "rate", header: "Rate", width: "12%" },
    { key: "review", header: "Review", width: "100%" },
  ],
  headerAlignments: ["left", "center", "center", "left"],
};

const filterOptions = [
  { key: "name", label: "Name", type: "text" },
  {
    key: "careType",
    label: "Care Type",
    type: "checkbox",
    options: ["Domici Care", "Senior Care", "Child Care"],
  },
  { key: "rate", label: "Minimum Rate", type: "number" },
];

export function FeedbackTable() {
  const handleSearch = (query: string) => {
    console.log("Searching:", query);
  };

  return (
    <DynamicTable
      config={feedbackConfig}
      data={feedbackData}
      onSearch={handleSearch}
      filterOptions={filterOptions}
    />
  );
}
