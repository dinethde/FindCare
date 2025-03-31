interface Qualification {
  level: string
  description: string
}

interface EducationalBackgroundProps {
  qualifications: Qualification[]
}

/**
 * Displays the caregiver's educational qualifications
 * with horizontal scrolling
 */
export default function EducationalBackground({ qualifications }: EducationalBackgroundProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Educational Background</h2>
      <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
        {qualifications.map((qual, index) => (
          <div key={index} className="flex-shrink-0 w-48 bg-gray-50 p-4 rounded-lg space-y-1">
            <div className="font-medium">{qual.level}</div>
            <p className="text-xs text-gray-600">{qual.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

