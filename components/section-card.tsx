import type React from "react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SectionCardProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
  className?: string
}

export function SectionCard({ title, icon: Icon, children, className = "" }: SectionCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

