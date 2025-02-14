"use client";

import { useState, useMemo } from "react";
import type { TableConfig } from "../../types/TableTypes";
import { TableHeader } from "./TableHeader";
import { CareTypeBadge } from "./CareTypeBadge";
import { SquareStackIcon as Square2StackIcon } from "lucide-react";
import { FilterModal2 } from "./FilterModal2";
import { ReviewBox } from "../ReviewBadge";

interface DynamicTableProps {
  config: TableConfig;
  data: any[];
  filterOptions: Array<{
    key: string;
    label: string;
    type: "text" | "number" | "checkbox";
    options?: string[];
  }>;
}

export function DynamicTable({
  config,
  data,
  filterOptions,
}: DynamicTableProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Apply filters
      const passesFilters = Object.entries(activeFilters).every(
        ([key, value]) => {
          if (Array.isArray(value)) {
            // For checkbox filters
            return value.length === 0 || value.includes(item[key]);
          } else if (typeof value === "string") {
            // For text filters
            return String(item[key])
              .toLowerCase()
              .includes(value.toLowerCase());
          } else if (typeof value === "number") {
            // For number filters
            return item[key] >= value;
          }
          return true;
        }
      );

      // Apply search
      const passesSearch = Object.values(item).some(
        (value) =>
          value !== null &&
          value !== undefined &&
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
      );

      return passesFilters && passesSearch;
    });
  }, [data, activeFilters, searchQuery]);

  const renderCell = (column: any, item: any) => {
    const value = item[column.key];

    if (column.render) {
      return column.render(value);
    }

    if (column.key === "careType") {
      return <CareTypeBadge type={value} />;
    }

    if (column.key === "review") {
      return <ReviewBox review={value} rate={item.rate} />;
    }

    if (column.key === "assignedTimes" && Array.isArray(value)) {
      return (
        <div className="flex flex-col gap-1">
          {value.map((time: string, index: number) => (
            <span key={index} className="text-regular-text text-neutral-10">
              {time}
            </span>
          ))}
        </div>
      );
    }

    return <span className="text-regular-text text-neutral-10">{value}</span>;
  };

  const handleFilter = (filters: Record<string, any>) => {
    setActiveFilters(filters);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="rounded-regular border bg-main overflow-hidden flex flex-col p-5 gap-8">
      <div className="">
        <TableHeader
          title={config.title}
          onSearch={handleSearch}
          onFilter={() => setIsFilterModalOpen(true)}
          showTabs={config.showTabs}
          showSeeMore={config.showSeeMore}
        />
      </div>
      <div className="">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-3">
              {config.columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`pb-3 text-left text-tagline text-neutral-7 ${index === 0 ? "pl-4" : ""} ${
                    config.headerAlignments && config.headerAlignments[index]
                      ? `text-${config.headerAlignments[index]}`
                      : ""
                  }`}
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              ))}
              <th className="w-10 pb-2" />
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={
                  index !== filteredData.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }
              >
                {config.columns.map((column, colIndex) => (
                  <td
                    key={column.key}
                    className={`${
                      config.title === "Caregiver List" ? "py-6" : "py-5"
                    } ${colIndex === 0 ? "pl-4" : "px-4"}  ${colIndex === config.columns.length - 1 ? "pr-0" : ""} ${
                      config.headerAlignments &&
                      config.headerAlignments[colIndex]
                        ? `text-${config.headerAlignments[colIndex]}`
                        : ""
                    }`}
                  >
                    {renderCell(column, item)}
                  </td>
                ))}

                <td
                  className={` ${config.title === "Caregiver List" || config.title === "Client List" ? "py-5 pr-4 flex justify-end" : "hidden"} `}
                >
                  <button className="text-gray-400 hover:text-gray-600">
                    <Square2StackIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FilterModal2
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleFilter}
        filterOptions={filterOptions}
      />
    </div>
  );
}
