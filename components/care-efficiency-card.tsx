"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { EfficiencyData } from "../types/dashboard"

interface CareEfficiencyCardProps {
  data: EfficiencyData[]
}

export function CareEfficiencyCard({ data }: CareEfficiencyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">All Time Care efficiency</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" hide />
              <YAxis hide domain={[60, 100]} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-white p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="font-medium">Efficiency</div>
                          <div className="font-medium">{payload[0].value.toFixed(1)}%</div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#007AFF" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 text-sm text-gray-500">Care efficiency has down 5% this month</p>
      </CardContent>
    </Card>
  )
}

