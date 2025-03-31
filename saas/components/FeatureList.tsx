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
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <ClipboardList className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-600" />
          <div>
            <div className="font-medium">{title}</div>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

