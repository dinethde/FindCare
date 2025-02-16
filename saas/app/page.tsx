import { progressCardData } from "@/data/progressCardData"
import { ProgressCard } from "@/components/ProgressCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f8] p-6">
      <div className="max-w-2xl mx-auto space-y-4">
        {progressCardData.map((card) => (
          <ProgressCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  )
}

