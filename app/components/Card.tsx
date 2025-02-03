"use client";
import { CircleDollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { RevenueCardProps, Month } from "./types/CardTypes";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export default function RevenueCard({
  revenue = 560000,
  selectedMonth = "oct-2024",
  onMonthChange = () => {},
}: RevenueCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="w-full max-w-md bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h2 className="text-sm font-medium text-muted-foreground">
          Total Revenue
        </h2>
        <Select defaultValue={selectedMonth} onValueChange={onMonthChange}>
          <SelectTrigger className="h-8 w-[100px] bg-secondary">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => (
              <SelectItem key={month.value} value={month.value}>
                {month.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary/20 p-2">
            <CircleDollarSign className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-bold">
            {formatCurrency(revenue)} LKR
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
