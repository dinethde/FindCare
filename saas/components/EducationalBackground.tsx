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
    <div className="flex flex-col gap-6 text-neutral-10">
      <h3 className="text-h5 text-neutral-11">Educational Background</h3>
      <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide">
        {qualifications.map((qual, index) => (
          <div key={index} className="flex flex-col flex-shrink-0 w-48 bg-gray-50 p-4 rounded-lg gap-1 justify-end border-[0.5px] bg-white border-x-neutral-4 shadow-[0px 0px 3px 0px rgba(0, 0, 0, 0.08)]">
            <div className="text-regular-text-thicker">{qual.level}</div>
            <p className="text-small-text text-neutral-7">{qual.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

