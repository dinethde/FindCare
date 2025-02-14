import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface SectionCardProps {
  title: string;
  icon: string;
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
          <Image src={Icon} alt={"Icon"} className="h-6 w-6" />
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
