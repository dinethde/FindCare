// requirementDetails.types.ts

export interface RequirementSection {
  heading: string;
  items: string[];
}

export interface RequirementDetails {
  requirements: RequirementSection;
  caregiverRequirements: RequirementSection;
  skillsAndExperience: RequirementSection;
  weeklyActivities: RequirementSection;
  specialInstructions: RequirementSection;
}
