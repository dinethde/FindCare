"use client";

import { BestCaregiversCard } from "@/components/cards/BestCaregiversCard";
import { CareEfficiencyCard } from "@/components/cards/CareEfficiencyCard";
import { caregivers, efficiencyData } from "@/data/mock-data";
import Card from "@/components/cards/Card";
import { TableConfig } from "@/types/TableTypes";
import { CaregiverTable } from "@/components/table/CaregiverTable";
import { TotalShiftsCard } from "@/components/cards/TotalShiftCard_2";
import { shiftsData } from "@/data/pie-chart/totalShiftCard";
import { FilterOption } from "@/types/TableTypes";
import { useGetAllCaregivers } from "@/utils/hooks/useGetAllCaregivers";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Caregiver } from "@/types/TableTypes";
// import { caregiverData } from "@/data/caregiver_data";

export default function CaregiverPage() {
  const { data: caregiversData } = useGetAllCaregivers();
  const pathname = usePathname();
  const tenantId = pathname.split("/")[2]; // Extract the tenant ID from path

  // Create the dynamic path for caregiver profiles
  const profileBasePath = `/tenant/${tenantId}/caregivers`;

  // Format the data for display if needed
  const displayData = useMemo(() => {
    if (caregiversData) {
      return caregiversData;
    }
    return null;
  }, [caregiversData]);

  const caregiverConfig: TableConfig<Caregiver> = {
    title: "Caregiver List",
    columns: [
      { key: "name", header: "Name", width: "15%" },
      { key: "id", header: "id", width: "8%" },
      { key: "contactInfo", header: "mobile", width: "20%" },
      { key: "careType", header: "Care Type", width: "15%" },
      { key: "rate", header: "Rate", width: "15%" },
      { key: "location", header: "location", width: "12%" },
    ],
    headerAlignments: ["left", "center", "center", "center", "center", "right"],
  };

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

  const totalCaregivers = displayData ? displayData.length : 0;

  return (
    <div className="flex flex-col gap-8">
      {
        <div className="flex flex-col gap-8">
          <div className="container mx-auto grid grid-cols-[1.25fr_0.65fr_1fr] gap-4 p-0 m-0">
            {/* == Best caregiver card == */}
            <div>
              <BestCaregiversCard caregivers={caregivers} />
            </div>

            {/* == Total Shifts caregiver card == */}
            <div>
              <TotalShiftsCard {...shiftsData} />
            </div>

            <div className="flex flex-col gap-4">
              {/* == Card == */}
              <Card
                revenue={"24/"}
                title="Active Caregivers"
                dataType={`${totalCaregivers}`}
                dataTypeClassName="text-[18px] font-medium text-neutral-8"
                contentClassName="text-h4"
              />
              {/* == Care afficeny Card plus chart  == */}
              <CareEfficiencyCard data={efficiencyData} />
            </div>
          </div>

          <div>
            {/* Pass fetched data and profilePath to CaregiverTable */}
            <CaregiverTable
              caregiverConfig={caregiverConfig}
              filterOptions={filterOptions}
              tableType="eye"
              data={displayData || []}
              profilePath={profileBasePath}
            />
          </div>
        </div>
      }
    </div>
  );
}
