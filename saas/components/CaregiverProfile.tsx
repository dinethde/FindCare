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
import { ArrowLeft, Download, Heart } from "lucide-react"

interface CaregiverProfileProps {
  caregiver: Caregiver
}

/**
 * Main component that renders the entire caregiver profile
 * @param caregiver - The caregiver data object
 */
export default function CaregiverProfile({ caregiver }: CaregiverProfileProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Profile Image */}
      <div className="relative w-full h-64">
        <Image
          src={caregiver.profileImage || "/placeholder.svg"}
          alt={`${caregiver.name} with patient`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 p-2 rounded-full">
          <ArrowLeft className="text-white" />
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="p-2 ">
            <Download className="text-white" />
          </div>
          <div className="p-2 ">
            <Heart className="text-white" />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
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
        </div>

        <FeatureList title="Key feature" features={caregiver.keyFeatures} />

        <AboutSection content={caregiver.about} />

        <FeatureList title="Normal feature" features={caregiver.normalFeatures} />

        <EducationalBackground qualifications={caregiver.education} />

      </div>

      <div className="w-full">
        <RatingSection
          reviews={caregiver.agencyReviews}
        />
      </div>

      <div className="p-6 flex flex-col gap-8">

        <AgencyDetails agency={caregiver.agencyDetails} />

        <HostDetails details={caregiver.hostDetails} />

      </div>
    </div>
  )
}

