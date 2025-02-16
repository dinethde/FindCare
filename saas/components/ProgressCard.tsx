import type { CardData } from "@/types/progressCardType"
import { StatusIndicator } from "./StatusIndicator"

interface ProgressCardProps {
  data: CardData
}

export function ProgressCard({ data }: ProgressCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="border-b border-[#e6e6e6] pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[#191919] text-xl font-medium">{data.name}</h2>
            <p className="text-[#999999] text-sm">{data.code}</p>
          </div>
          <span className="text-[#999999] text-sm">{data.timestamp}</span>
        </div>
      </div>
      <p className="text-[#262626] mt-4 leading-relaxed">{data.description}</p>
      <StatusIndicator status={data.status} />
    </div>
  )
}

