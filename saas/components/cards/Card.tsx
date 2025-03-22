"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { RevenueCardProps, Month } from "@/types/CardTypes";
import NestedCirclesIcon from "../icons/NestedCirclesIcon";
import SelectTime from "./SelectTime";
import { useState } from "react";
import seeMoreIcon from "@/public/assets/icons/see-more-icon.svg";
import Image from "next/image";
import Link from "next/link";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export default function RevenueCard({
  revenue = 560000,
  title = "Total Revenue",
  color = "#FCA827",
  isButtonVisible = true,
  btnVarient = "SelectTime",
  dataType = "LKR",
  link = "/",
  isBigText = true,
  contentClassName = "font-bold text-neutral-10",
  dataTypeClassName = "",
}: RevenueCardProps) {
  const [selectedYear, setSelectedYear] = useState("oct-2024");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="w-full big-card p-0 shadow-sm">
      <div
        className={`flex flex-col ${btnVarient === "SelectTime" ? "gap-3" : "gap-4"} `}
      >
        <CardHeader className="flex flex-row items-center justify-between p-0">
          <h2 className="card-header">{title}</h2>

          {isButtonVisible &&
            (btnVarient === "SelectTime" ? (
              <SelectTime
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                data={months}
              />
            ) : (
              <Link href={link}>
                <Image
                  src={seeMoreIcon}
                  width={24}
                  height={24}
                  alt="see more"
                />
              </Link>
            ))}
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center space-x-3">
            <NestedCirclesIcon color={color} />
            <div className="text-h5">
              <div className={contentClassName}>
                {typeof revenue !== "string"
                  ? formatCurrency(revenue)
                  : revenue}
                <span className={dataTypeClassName}>{dataType}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
