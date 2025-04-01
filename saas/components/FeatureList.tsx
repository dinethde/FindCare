import { ClipboardList } from "lucide-react"

interface Feature {
  description: string
}

interface FeatureListProps {
  title: string
  features: Feature[]
}

/**
 * Displays a list of features with a title
 * @param title - The title of the feature section
 * @param features - Array of feature descriptions
 */
export default function FeatureList({ title, features }: FeatureListProps) {
  return (
    <div className="flex flex-col gap-5 text-neutral-10">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <ClipboardList className="w-6 h-6 mt-1 flex-shrink-0 text-neutral-9" />
          <div className="space-y-1">
            <div className="text-regular-text-thicker">{title}</div>
            <p className="text-small-text text-neutral-7 "><span className="leading-3"> {feature.description}</span></p>
          </div>
        </div>
      ))}
    </div>
  )
}

