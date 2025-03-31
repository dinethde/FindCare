interface KeyStat {
  value: string
  label: string
}

interface KeyStatsProps {
  stats: KeyStat[]
}

/**
 * Displays key statistics about the caregiver in a horizontal layout
 */
export default function KeyStats({ stats }: KeyStatsProps) {
  return (
    <div className="flex justify-between">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center bg-gray-50 p-3 rounded-lg w-full mx-1">
          <div className="text-lg font-semibold">{stat.value}</div>
          <div className="text-xs text-gray-500 text-center">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

