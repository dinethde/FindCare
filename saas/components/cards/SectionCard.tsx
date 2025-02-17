import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "../Avatar";

interface SectionCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  className?: string;
  stackVertical?: boolean;
  imgSize?: string;
  isIconVisible?: boolean;
}

export function SectionCard({
  title,
  icon: Icon,
  children,
  className = "",
  stackVertical = true,
  imgSize = "sm",
  isIconVisible = true,
}: SectionCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="p-0">
        <CardTitle
          className={`flex gap-3 items-center ${stackVertical && "flex-col gap-[10px] items-start"} selection:items-start`}
        >
          {isIconVisible && <Avatar src={Icon} alt={"Icon"} size={imgSize} />}

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
