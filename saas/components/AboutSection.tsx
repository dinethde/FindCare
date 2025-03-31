interface AboutSectionProps {
  content: string
}

/**
 * Displays the about section with caregiver's description
 */
export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">About</h2>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  )
}

