import { SectionCard } from "@/components/cards/SectionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { requirementDetails } from "@/data/client-modal/clientProfileData";
import { comments } from "@/data/Comments";
import { CommentCard } from "@/components/CommentCard";
import { progressCardData } from "@/data/progressCardData";
import { ProgressCard } from "@/components/ProgressCard";
import planIcon from "@/public/assets/icons/plan-icon.svg";
import caregiverNotes from "@/public/assets/icons/care-recipient-details=icon.svg";
import pinkisRedIcon from "@/public/assets/icons/pinkis-red-circle-icon.svg";
import { Circle } from "lucide-react";
import { WeeklyPlanner } from "@/components/schedule/WeeklyPlanner";
import { profileData } from "@/data/client-modal/clientProfileData";
import { DetailRow } from "@/components/DetailRow";
import orangeCircleIcon from "@/public/assets/icons/orange-circle-icon.svg";

const firstRowKeys = ["caregiverRequirements", "skillsAndExperience"] as const;
const secondRowKeys = ["weeklyActivities", "specialInstructions"] as const;

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
          <div className="w-full flex flex-col gap-6">
            <div className="w-full border border-neutral-3 rounded-xl shadow-md p-4">
              <div className="-ml-20 w-full">
                <WeeklyPlanner />
              </div>
            </div>
            <div className=" flex gap-4">
              <div className="w-3/6">
                <SectionCard
                  title="Care Plan"
                  icon={planIcon.src}
                  className="flex p-4 flex-col gap-3 bg-main border-neutral-3 shadow-md"
                  stackVertical={false}
                  imgSize="xs"
                >
                  <DetailRow
                    label="Plan name :"
                    value={profileData.carePlan.plan}
                  />
                  <DetailRow
                    label="Plan price :"
                    value={profileData.carePlan.price}
                  />
                  <DetailRow
                    label="Care hours :"
                    value={profileData.carePlan.careHours}
                  />
                </SectionCard>
              </div>

              <div className="w-full">
                <SectionCard
                  title="Care Goals"
                  icon={orangeCircleIcon.src}
                  className="flex p-4 flex-col gap-3 bg-main border-neutral-3 shadow-md"
                  stackVertical={false}
                >
                  {profileData.goals.goalsList.length > 0 ? (
                    profileData.goals.goalsList.map((goal, index) => (
                      <DetailRow label={`Goal ${index}`} value={goal} />
                    ))
                  ) : (
                    <p className="text-grey">
                      <i>This use doesn't have any goals yet.</i>
                    </p>
                  )}
                </SectionCard>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="careReq" className="m-0">
          <div className="space-y-4">
            <div className="flex gap-4">
              <SectionCard
                title={requirementDetails["requirements"].heading}
                icon={requirementDetails["requirements"].icon}
                className="flex p-4 flex-col gap-3 bg-main2 border-neutral-3 w-3/6"
                stackVertical={false}
                imgSize="xs"
              >
                {requirementDetails["requirements"].items.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Circle size={8} fill="#222" />
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
                      icon={requirementDetails[key].icon}
                      className="flex p-4 flex-col gap-3 bg-main2 border-neutral-3 w-full"
                    >
                      {requirementDetails[key].items.map((item, index) => (
                        <div key={index} className="flex gap-2 items-center">
                          <Circle size={8} fill="#222" />
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
                      icon={requirementDetails[key].icon}
                      className="flex p-4 flex-col gap-3 bg-main2 border-neutral-3 w-full"
                    >
                      {requirementDetails[key].items.map((item, index) => (
                        <div key={index} className="flex gap-2 items-center">
                          <Circle size={8} fill="#222" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </SectionCard>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <SectionCard
                title={"Patient Progress"}
                icon={pinkisRedIcon.src}
                className="flex p-5 flex-col gap-3 bg-[#FBFEFE] border-neutral-2 shadow-md  w-3/6"
              >
                <div className="flex flex-col gap-4 w-full">
                  {progressCardData.map((card) => (
                    <ProgressCard key={card.id} data={card} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                title={"Caregiver Notes"}
                icon={caregiverNotes.src}
                className="flex p-5 flex-col gap-3 bg-[#FBFEFE] border-neutral-2 shadow-md w-full h-fit"
                stackVertical={false}
              >
                <div className="flex flex-col gap-4 w-full">
                  {comments.map((comment) => (
                    <CommentCard
                      key={comment.id}
                      comment={comment}
                      isButtonShowm={false}
                    />
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
