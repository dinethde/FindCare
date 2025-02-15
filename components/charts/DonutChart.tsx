"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface DonutChartProps {
  data: {
    name: string
    value: number
    color: string
  }[]
  centerText: string | number
}

export function DonutChart({ data, centerText }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* Main center text */}
        <text
          x="50%"
          y="47%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#000000"
          fontSize="32"
          fontWeight="600"
        >
          {centerText}
        </text>
        {/* Optional "Total Shifts" label below the number */}
        {typeof centerText === "number" && (
          <text x="50%" y="62%" textAnchor="middle" dominantBaseline="middle" fill="#666666" fontSize="14">
            Total Shifts
          </text>
        )}
      </PieChart>
    </ResponsiveContainer>
  )
}

