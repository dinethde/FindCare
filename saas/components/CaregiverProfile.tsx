import Image from "next/image"
import type { Caregiver } from "@/types/caregiver"
import ProfileHeaderMobile from "@/components/ProfileHeaderMobile"
import KeyStats from "@/components/KeyStats"
import HostedBy from "@/components/HostedBy"
import FeatureList from "@/components/FeatureList"
import AboutSection from "@/components/AboutSection"
import EducationalBackground from "@/components/EducationalBackground"
import RatingSection from "@/components/RatingSection"
import AgencyDetails from "@/components/AgencyDetails"
import HostDetails from "@/components/HostDetails"

interface CaregiverProfileProps {
  caregiver: Caregiver
}

/**
 * Main component that renders the entire caregiver profile
 * @param caregiver - The caregiver data object
 */
export default function CaregiverProfile({ caregiver }: CaregiverProfileProps) {
  return (
    <div className="flex flex-col">
      {/* Profile Image */}
      <div className="relative w-full h-64">
        <Image
          src={caregiver.profileImage || "/placeholder.svg"}
          alt={`${caregiver.name} with patient`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 p-2 rounded-full bg-white/80 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="p-2 rounded-full bg-white/80 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="p-2 rounded-full bg-white/80 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-6 space-y-6">
        <ProfileHeaderMobile
          name={caregiver.name}
          location={caregiver.location}
          rating={caregiver.rating}
          reviews={caregiver.reviews}
        />

        <KeyStats stats={caregiver.keyStats} />

        <HostedBy
          agency={caregiver.hostedBy.agency}
          years={caregiver.hostedBy.years}
          image={caregiver.hostedBy.image}
        />

        <FeatureList title="Key feature" features={caregiver.keyFeatures} />

        <AboutSection content={caregiver.about} />

        <FeatureList title="Normal feature" features={caregiver.normalFeatures} />

        <EducationalBackground qualifications={caregiver.education} />

        <RatingSection
          rating={caregiver.ratingSection.rating}
          date={caregiver.ratingSection.date}
          review={caregiver.ratingSection.review}
          reviewer={caregiver.ratingSection.reviewer}
          reviewerImage={caregiver.ratingSection.reviewerImage}
        />

        <AgencyDetails agency={caregiver.agencyDetails} />

        <HostDetails details={caregiver.hostDetails} />
      </div>
    </div>
  )
}

