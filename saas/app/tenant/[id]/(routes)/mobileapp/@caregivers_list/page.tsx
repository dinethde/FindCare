import { DynamicTable } from "@/components/table/DynamicTable";
import { caregiverData } from "@/data/caregiver_data"
import { FilterOption, TableConfig } from "@/types/TableTypes";

export default function CaregiverListMobileApp() {
    interface CaregiverData {
        id: string; // Changed from number to string
        name: string;
        status: string;
    }

    const caregiverConfig: TableConfig<CaregiverData> = {
        title: "Caregiver List",
        columns: [
            { key: "name", header: "Name", width: "25%" },
            { key: "id", header: "id", width: "25%" },
            { key: "status", header: "Rate", width: "25%" },
        ],
        headerAlignments: ["left", "center", "center"],
    };

    const filterOptions: FilterOption[] = [
        { key: "name", label: "Name", type: "text" },
        {
            key: "careType",
            label: "Care Type",
            type: "checkbox",
            options: ["Domici Care", "Senior Care", "Child Care"],
        },
        { key: "careType", label: "Location", type: "text" },
    ];

    const displayData: CaregiverData[] = caregiverData.map((item) => ({
        id: String(item.id), // Convert number to string
        name: item.name,
        status: item.status
    }));

    return (
        <DynamicTable
            config={caregiverConfig}
            data={displayData}
            filterOptions={filterOptions}
        />
    )
}