interface KeyStat {
  value: string
  label: string | undefined
}

interface KeyStatsProps {
  stats: KeyStat[]
}

/**
 * Displays key statistics about the caregiver in a horizontal layout
 */
export default function KeyStats({ stats }: KeyStatsProps) {
  return (
    <div className="grid grid-cols-[0.5fr_1fr_0.5fr] w-full p-4 border-[0.2px] border-neutral-5 rounded-md shadow-medium bg-white px-6">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center gap-1">
          <div className="text-h6 font-semibold text-center">{stat.value}</div>
          {stat.label !== undefined ? (<div className="text-xsmall-text text-neutral-7 font-medium text-center">{stat.label}</div>) : ""}
        </div>
      ))}
    </div>
  )
}

