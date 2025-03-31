import Image from "next/image"

interface HostedByProps {
  agency: string
  years: number
  image: string
}

/**
 * Displays information about the hosting agency
 */
export default function HostedBy({ agency, years, image }: HostedByProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={agency} fill className="object-cover" />
      </div>
      <div>
        <div className="text-sm">Hosted by {agency}</div>
        <div className="text-xs text-gray-500">{years} years hosting</div>
      </div>
    </div>
  )
}

