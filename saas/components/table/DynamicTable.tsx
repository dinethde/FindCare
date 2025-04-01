"use client";

import { useState, useMemo } from "react";
import type { TableConfig, TableColumn } from "../../types/TableTypes";
import { TableHeader } from "./TableHeader";
import { CareTypeBadge } from "../CareTypeBadge";
import { SquareStackIcon as Square2StackIcon } from "lucide-react";
import { FilterModal2 } from "./FilterModal2";
import { ReviewBox } from "../ReviewBadge";
import Link from "next/link";
import { Eye } from "lucide-react";
import { usePathname } from "next/navigation";

type FilterRecord = Record<string, string | number | string[]>;

interface DynamicTableProps<T> {
  config: TableConfig<T>;
  tableType?: string;
  data: T[];
  filterOptions: Array<{
    key: string;
    label: string;
    type: "text" | "number" | "checkbox";
    options?: string[];
  }>;
  initialFilters?: FilterRecord;
  profilePath?: string; // Add profilePath for dynamic navigation
}

export function DynamicTable<T extends { id: string }>({
  config,
  data,
  filterOptions,
  tableType = "eye",
  initialFilters = {},
  profilePath = "", // Default to empty string if not provided
}: DynamicTableProps<T>) {
  const pathname = usePathname();
  const pageIn = pathname.split("/")[3]; // Get the route section (caregivers, clients, etc.)

  // Function to generate dynamic navigation link based on item ID
  const getNavigationLink = (itemId: string): string => {
    // If a profile path was provided, use it with the item ID
    if (profilePath) {
      return `${profilePath}/${itemId}/profile/overview`;
    }

    // Otherwise fall back to default navigation paths
    if (pageIn === "caregivers") {
      return `/tenant/${pathname.split("/")[2]}/caregivers/${itemId}/profile/overview`;
    } else if (pageIn === "clients") {
      return `/tenant/${pathname.split("/")[2]}/clients/${itemId}/profile/overview`;
    } else if (pageIn === "filla-spot") {
      return `/tenant/${pathname.split("/")[2]}/filla-spot/modal`;
    } else {
      return "/";
    }
  };

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterRecord>(initialFilters);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Apply filters
      const passesFilters = Object.entries(activeFilters).every(
        ([key, value]) => {
          if (!value) return true;

          const itemValue = item[key as keyof T];
          if (Array.isArray(value)) {
            // For checkbox filters
            return value.length === 0 || value.includes(String(itemValue));
          } else if (typeof value === "string") {
            // For text filters
            return String(itemValue)
              .toLowerCase()
              .includes(value.toLowerCase());
          } else if (typeof value === "number") {
            // For number filters
            return Number(itemValue) >= value;
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

  const renderCell = (column: TableColumn<T>, item: T) => {
    const value = item[column.key];

    if (column.render) {
      return column.render(value, item);
    }

    if (column.key === "careType" || column.key === "status") {
      return <CareTypeBadge type={value as string} />;
    }

    if (column.key === "review") {
      // Safely type the item so that 'rate' is no longer 'any'.
      const typedItem = item as T & { rate?: number };
      return <ReviewBox review={value as string} rate={typedItem.rate ?? 0} />;
    }

    if (column.key === "assignedTimes" && Array.isArray(value)) {
      return (
        <div className="flex flex-col gap-3">
          {value.map((time: string, index: number) => (
            <span key={index} className="text-regular-text text-neutral-10">
              {time}
            </span>
          ))}
        </div>
      );
    }

    return <div className="text-regular-text text-neutral-10 w-fit">{String(value)}</div>;
  };


  // Handle filter and search actions
  const handleFilter = (filters: FilterRecord) => {
    setActiveFilters(filters);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="rounded-regular border bg-main overflow-hidden shadow-md flex flex-col p-5 gap-8 w-full">
      <div>
        <TableHeader
          title={config.title}
          onSearch={handleSearch}
          onFilter={() => setIsFilterModalOpen(true)}
          showTabs={config.showTabs}
          showSeeMore={config.showSeeMore}
        />
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-3 flex">
              {config.columns.map((column, index) => (
                <th
                  key={String(index)}
                  className={`pb-3 text-${config?.headerAlignments ? config.headerAlignments[index] : "left"} text-tagline text-neutral-7 ${index === 0 ? "pl-4" : ""
                    }`}
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              ))}
              <th className="w-10 pb-2" />
            </tr>
          </thead>

          {filteredData.length > 0 ? (
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={
                    `flex  ${index !== filteredData.length - 1
                      ? "border-b border-gray-600"
                      : ""}`
                  }
                >
                  {config.columns.map((column, colIndex) => (
                    <td
                      key={String(column.key)}
                      className={`${config.title === "Caregiver List" ? "py-6" : "py-5"
                        } ${colIndex === 0 ? "pl-4" : "px-4"} ${colIndex === config.columns.length - 1 ? "pr-0" : ""
                        } inline-flex justify-${config?.headerAlignments ? config.headerAlignments[colIndex] === "right" ? "end" : config.headerAlignments[colIndex] : "left"}`}
                      style={{ width: column.width }}

                    >
                      {renderCell(column as TableColumn<T>, item)}
                    </td>
                  ))}

                  {/* Action buttons with dynamic navigation */}
                  {tableType === "fill" ? (
                    <td className="py-5 pr-4 flex justify-end flex-grow">
                      <Link href={getNavigationLink(item.id)}>
                        <Square2StackIcon className="h-5 w-5" />
                      </Link>
                    </td>
                  ) : tableType === "eye" ? (
                    <td className="py-5 pr-4 flex justify-end flex-grow">
                      <Link href={getNavigationLink(item.id)}>
                        <Eye className="h-5 w-5" />
                      </Link>
                    </td>
                  ) : (
                    <td className="hidden"></td>
                  )}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan={config.columns.length + (config.showViewAction ? 1 : 0)}
                  className="py-8 text-center"
                >
                  No data available
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      <FilterModal2
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleFilter}
        filterOptions={filterOptions}
        initialFilters={initialFilters}
      />
    </div>
  );
}
