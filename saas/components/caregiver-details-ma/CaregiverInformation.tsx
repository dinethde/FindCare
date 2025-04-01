"use client"

import { useState } from "react"
import { ArrowLeft, Edit, Plus, Save } from "lucide-react"
import Image from "next/image"
import { caregiverData as initialData } from "@/data/caregiver-details-ma/caregiver_data"
import InfoField from "@/components/caregiver-details-ma/InfoField"
import FeatureSection from "@/components/caregiver-details-ma/FeatureSection"
import CertificationItem from "@/components/caregiver-details-ma/CertificationItem"
import FieldGroup from "@/components/caregiver-details-ma/FieldGroup"
import EditableField from "@/components/caregiver-details-ma/EditableField"
import { Button } from "@/components/ui/button"
import type { CaregiverData, FeatureItem, CertificationItemType } from "@/types/caregiver-details-ma/caregiver"

/**
 * CaregiverInformation component displays detailed information about a caregiver
 * including personal details, statistics, specialties, and certifications
 */
const CaregiverInformation = () => {
  // State for caregiver data
  const [caregiverData, setCaregiverData] = useState<CaregiverData>(initialData)

  // State to track edit mode
  const [isEditing, setIsEditing] = useState(false)

  // State to track form values during editing
  const [formValues, setFormValues] = useState<Partial<CaregiverData>>(caregiverData)

  /**
   * Toggles edit mode
   */
  const toggleEditMode = () => {
    if (isEditing) {
      // If exiting edit mode without saving, reset form values
      setFormValues(caregiverData)
    }
    setIsEditing(!isEditing)
  }

  /**
   * Handles input changes during editing
   * @param field - The field name to update
   * @param value - The new value
   */
  const handleInputChange = (field: keyof CaregiverData, value: string | number | FeatureItem[] | CertificationItemType[]) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  /**
   * Saves the updated information
   */
  const saveUpdatedInfo = () => {
    setCaregiverData((prev) => ({
      ...prev,
      ...formValues,
    }))
    setIsEditing(false)
  }

  /**
   * Updates the selected features for a section
   * @param section - The section identifier
   * @param selectedItems - The selected feature items
   */
  const updateSelectedFeatures = (section: keyof CaregiverData, selectedItems: FeatureItem[]) => {
    handleInputChange(section, selectedItems)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Header with back button and edit button */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <button className="text-gray-500">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-medium">{caregiverData.name} Information</h1>
            <p className="text-sm text-gray-500">{caregiverData.id}</p>
          </div>
        </div>
        <button className="text-blue-500" onClick={toggleEditMode}>
          <Edit size={20} />
        </button>
      </div>

      {/* Group 1: Basic Information */}
      <FieldGroup>
        {isEditing ? (
          <>
            <EditableField
              label="Caregiver Name"
              value={formValues.caregiverName || ""}
              onChange={(value) => handleInputChange("caregiverName", value)}
              action={<button className="text-blue-500 text-sm font-medium">Find Care</button>}
            />

            {/* Replace the EditableField with InfoField to make caregiver ID un-editable */}
            <InfoField label="Caregiver Id" value={caregiverData.caregiverId} />

            <EditableField
              label="Tagline"
              value={formValues.tagline || ""}
              onChange={(value) => handleInputChange("tagline", value)}
              multiline
            />

            <InfoField
              label="Photo"
              value={
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={formValues.photo || "/placeholder.svg"}
                      alt="Caregiver photo"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <button className="text-blue-500 text-sm">Change</button>
                </div>
              }
            />
          </>
        ) : (
          <>
            <InfoField
              label="Caregiver Name"
              value={caregiverData.caregiverName}
              action={<button className="text-blue-500 text-sm font-medium">Find Care</button>}
            />

            <InfoField label="Caregiver Id" value={caregiverData.caregiverId} />

            <InfoField label="Tagline" value={caregiverData.tagline} />

            <InfoField
              label="Photo"
              value={
                <div className="h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={caregiverData.photo || "/placeholder.svg"}
                    alt="Caregiver photo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              }
            />
          </>
        )}
      </FieldGroup>

      {/* Group 2: Details and Stats */}
      <FieldGroup>
        {isEditing ? (
          <>
            <EditableField
              label="About"
              value={formValues.about || ""}
              onChange={(value) => handleInputChange("about", value)}
              multiline
            />

            <EditableField
              label="Total clients"
              value={formValues.totalClients?.toString() || ""}
              onChange={(value) => handleInputChange("totalClients", Number.parseInt(value) || 0)}
              type="number"
            />

            <EditableField
              label="Years of excellence"
              value={formValues.yearsOfExcellence?.toString() || ""}
              onChange={(value) => handleInputChange("yearsOfExcellence", Number.parseInt(value) || 0)}
              type="number"
            />

            <EditableField
              label="Live in"
              value={formValues.liveIn || ""}
              onChange={(value) => handleInputChange("liveIn", value)}
            />

            <EditableField
              label="Client Satisfaction Rate"
              value={formValues.clientSatisfactionRate || ""}
              onChange={(value) => handleInputChange("clientSatisfactionRate", value)}
            />
          </>
        ) : (
          <>
            <InfoField label="About" value={caregiverData.about} />

            <InfoField label="Total clients" value={caregiverData.totalClients.toString()} />

            <InfoField label="Years of excellence" value={caregiverData.yearsOfExcellence.toString()} />

            <InfoField label="Live in" value={caregiverData.liveIn} />

            <InfoField label="Client Satisfaction Rate" value={caregiverData.clientSatisfactionRate} />
          </>
        )}
      </FieldGroup>

      {/* Group 3: Caregiver Specificity */}
      <FieldGroup>
        <FeatureSection
          title="Caregiver Specificity"
          selectedItems={isEditing ? formValues.caregiverSpecificity || [] : caregiverData.caregiverSpecificity}
          allItems={initialData.availableFeatures.caregiverSpecificity}
          onSelectionChange={(items) => updateSelectedFeatures("caregiverSpecificity", items)}
          isEditing={isEditing}
        />
      </FieldGroup>

      {/* Group 4: Key Features */}
      <FieldGroup>
        <FeatureSection
          title="Key Features"
          selectedItems={isEditing ? formValues.keyFeatures || [] : caregiverData.keyFeatures}
          allItems={initialData.availableFeatures.keyFeatures}
          onSelectionChange={(items) => updateSelectedFeatures("keyFeatures", items)}
          isEditing={isEditing}
        />
      </FieldGroup>

      {/* Group 5: General Features */}
      <FieldGroup>
        <FeatureSection
          title="General Features"
          selectedItems={isEditing ? formValues.generalFeatures || [] : caregiverData.generalFeatures}
          allItems={initialData.availableFeatures.generalFeatures}
          onSelectionChange={(items) => updateSelectedFeatures("generalFeatures", items)}
          isEditing={isEditing}
        />
      </FieldGroup>

      {/* Group 6: Certifications */}
      <FieldGroup>
        <div className="p-4 flex items-center justify-between">
          <span className="text-gray-500">Certifications</span>
          <button className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-md">
            <span>Add</span>
            <Plus size={16} />
          </button>
        </div>

        {/* Certification items */}
        <div className="px-4 py-2">
          {caregiverData.certifications.map((cert, index) => (
            <CertificationItem
              key={index}
              title={cert.title}
              date={cert.date}
              issuer={cert.issuer}
              description={cert.description}
              isEditing={isEditing}
              onUpdate={(updatedCert) => {
                const updatedCerts = [...(formValues.certifications || caregiverData.certifications)]
                updatedCerts[index] = { ...updatedCerts[index], ...updatedCert }
                handleInputChange("certifications", updatedCerts)
              }}
            />
          ))}
        </div>
      </FieldGroup>

      {/* Save button (only visible in edit mode) */}
      {isEditing && (
        <div className="p-4 flex justify-center">
          <Button
            onClick={saveUpdatedInfo}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            <Save size={16} />
            Save Updated Info
          </Button>
        </div>
      )}
    </div>
  )
}

export default CaregiverInformation

