interface AboutSectionProps {
  content: string
}

/**
 * Displays the about section with caregiver's description
 */
export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <div className="space-y-5">
      <h2 className="text-h5 text-neutral-11">About</h2>
      <p className="text-neutral-10  text-small-text "><span className="leading-[1.5]">{content}</span></p>
    </div>
  )
}

