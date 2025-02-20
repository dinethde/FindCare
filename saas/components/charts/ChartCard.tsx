"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DonutChart } from "@/components/ui/chart";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  centerText: string | number;
  legend?: {
    items: {
      label: string;
      value: string | number;
      color: string;
    }[];
  };
  footer?: {
    label: string;
    value: string | number;
  }[];
}

export function ChartCard({
  title,
  subtitle,
  data,
  centerText,
  legend,
  footer,
}: ChartCardProps) {
  return (
    <Card className="w-full w-48  p-4 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)]">
      <CardHeader className="p-0">
        <CardTitle className="texxt-h6">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-[180px] w-full">
          <DonutChart data={data} centerText={centerText} />
        </div>
        {legend && (
          <div className="space-y-2">
            {legend.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center text-neutral-7 gap-1"
              >
                <div
                  className={`h-3 w-3 rounded-[3px] `}
                  style={{ backgroundColor: item.color }}
                />
                <div className="text-tagline ">
                  <span className="">{item.value}</span>
                </div>
                <span className="text-tagline flex-1">{item.label}</span>
              </div>
            ))}
          </div>
        )}
        {footer && (
          <div className=" space-y-2">
            {footer.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-tagline justify-center"
              >
                <span className="text-muted-foreground">{item.label}</span>
                <span className="">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
