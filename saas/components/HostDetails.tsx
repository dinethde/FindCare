import { Check } from "lucide-react"

interface HostDetailsProps {
  details: string[]
}

/**
 * Displays host details in a bulleted list
 */
export default function HostDetails({ details }: HostDetailsProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Host Details</h2>
      <ul className="space-y-2 text-sm">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-4 h-4 mr-2 mt-0.5 text-gray-600" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <button className="text-sm font-medium">Show more ›</button>
    </div>
  )
}

