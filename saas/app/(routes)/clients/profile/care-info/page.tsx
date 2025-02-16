import { SectionCard } from "@/components/cards/SectionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import personalDetailsIcons from "@/public/assets/icons/personal-details-icon.svg";
import { requirementDetails } from "@/data/client-modal/clientProfileData";
import { Circle } from "lucide-react";

const firstRowKeys = ["caregiverRequirements", "skillsAndExperience"] as const;
const secondRowKeys = ["caregiverRequirements", "skillsAndExperience"] as const;

export default function CareInfo() {
  return (
    <div>
      <Tabs defaultValue="carePlan" className="space-y-8">
        <TabsList className="flex gap-5 w-full items-start justify-start bg-white border-b border-neutral-4 text-tagline text-neutral-7">
          <TabsTrigger value="carePlan" className="p-0">
            Care Plan
          </TabsTrigger>
          <TabsTrigger value="careReq" className="p-0">
            Care Requirements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="carePlan" className="m-0">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="careReq" className="m-0">
          <div className="flex gap-4">
            <SectionCard
              title={requirementDetails["requirements"].heading}
              icon={personalDetailsIcons}
              className="flex p-4 flex-col gap-3 bg-main2 border-neutral-3 w-3/6"
            >
              {requirementDetails["requirements"].items.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <p>-</p>
                  <p>{item}</p>
                </div>
              ))}
            </SectionCard>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4">
                {firstRowKeys.map((key) => (
                  <SectionCard
                    key={key}
                    title={requirementDetails[key].heading}
                    icon={personalDetailsIcons}
                    className="flex p-4 flex-col gap-3 bg-main2 border-neutral-3 w-full"
                  >
                    {requirementDetails[key].items.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <p>-</p>
                        <p>{item}</p>
                      </div>
                    ))}
                  </SectionCard>
                ))}
              </div>
              <div className="flex gap-4">
                {secondRowKeys.map((key) => (
                  <SectionCard
                    key={key}
                    title={requirementDetails[key].heading}
                    icon={personalDetailsIcons}
                    className="flex p-4 flex-col gap-3 bg-main2 border-neutral-3 w-full"
                  >
                    {requirementDetails[key].items.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <p>-</p>
                        <p>{item}</p>
                      </div>
                    ))}
                  </SectionCard>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
