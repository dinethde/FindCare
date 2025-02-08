import { MapPin, User, UserCircle, Building2 } from "lucide-react"
import { DetailRow } from "@/components/detail-row"
import { SectionCard } from "@/components/section-card"
import { StatusBadge } from "@/components/status-badge"
import { profileData } from "@/data/profile-data"

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Image */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS_High_fidelity-TRjFqLg4dOnWCPxK3xIOTk3IGUtDCA.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* About Section */}
        <div className="flex items-center justify-center p-6 bg-white rounded-lg">
          <p className="text-gray-500 italic">{profileData.about}</p>
        </div>

        {/* Personal Details */}
        <SectionCard title="Personal details" icon={UserCircle}>
          <DetailRow label="Name" value={profileData.personal.name} />
          <DetailRow
            label="Date of Birth"
            value={`${profileData.personal.dateOfBirth}     ${profileData.personal.age} age`}
          />
          <DetailRow label="Gender" value={profileData.personal.gender} />
          <DetailRow label="NIC" value={profileData.personal.nic} />
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address Section */}
        <SectionCard title="Address" icon={MapPin}>
          <DetailRow label="Address:" value={profileData.address.address} />
          <DetailRow label="City:" value={profileData.address.city} />
          <DetailRow label="Postal Code:" value={profileData.address.postalCode} />
        </SectionCard>

        {/* Employee Details */}
        <SectionCard title="Employee details" icon={Building2}>
          <DetailRow label="Id:" value={profileData.employee.id} />
          <DetailRow label="Hire date:" value={profileData.employee.hireDate} />
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Status:</span>
            <StatusBadge status={profileData.employee.status} />
          </div>
        </SectionCard>

        {/* Account Details */}
        <SectionCard title="Account details" icon={User}>
          <DetailRow label="Phone:" value={profileData.account.phone} />
          <DetailRow label="Email:" value={profileData.account.email} />
          <DetailRow label="PWD:" value={profileData.account.pwd} />
        </SectionCard>
      </div>
    </div>
  )
}

