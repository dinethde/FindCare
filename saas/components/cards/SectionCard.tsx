import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface SectionCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
  stackVertical?: boolean;
}

export function SectionCard({
  title,
  icon: Icon,
  children,
  className = "",
  stackVertical = true,
}: SectionCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="p-0">
        <CardTitle
          className={`flex gap-3  items-center ${stackVertical && "flex-col gap-2 items-start"} selection:items-start`}
        >
          <Image
            src={Icon}
            alt={"Icon"}
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <div className="text-neutral-10 text-h6">{title}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="w-full h-[0.8px] bg-neutral-4"></div>
        {children}
      </CardContent>
    </Card>
  );
}
