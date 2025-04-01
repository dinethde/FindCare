import Image, { StaticImageData } from "next/image"

interface HostedByProps {
  agency: string
  years: number
  image: string | StaticImageData
}

/**
 * Displays information about the hosting agency
 */
export default function HostedBy({ agency, years, image }: HostedByProps) {
  return (
    <div className="flex items-center space-x-3 text-neutral-10">
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black">
        <Image src={image || "/placeholder.svg"} alt={agency} fill className="object-cover" />
      </div>
      <div className="space-y-1">
        <div className="text-regular-text-thicker">Hosted by {agency}</div>
        <div className="text-tagline text-neutral-7">{years} years hosting</div>
      </div>
    </div>
  )
}

