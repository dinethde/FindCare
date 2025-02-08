import type React from "react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({
  title,
  icon: Icon,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="p-0">
        <CardTitle className="flex flex-col items-center gap-2 items-start ">
          <Icon className="h-5 w-5 bg-grey rounded-[60%]" />
          <div className="text-neutral-10 text-h6">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="w-full h-[1px] bg-neutral-4"></div>
        {children}
      </CardContent>
    </Card>
  );
}
