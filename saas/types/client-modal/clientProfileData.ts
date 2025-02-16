// requirementDetails.types.ts

export interface RequirementSection {
  heading: string;
  items: string[];
  icon: string;
}

export interface RequirementDetails {
  requirements: RequirementSection;
  caregiverRequirements: RequirementSection;
  skillsAndExperience: RequirementSection;
  weeklyActivities: RequirementSection;
  specialInstructions: RequirementSection;
}
