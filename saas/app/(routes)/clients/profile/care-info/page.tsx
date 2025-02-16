import { SectionCard } from "@/components/cards/SectionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import personalDetailsIcons from "@/public/assets/icons/personal-details-icon.svg";
import { requirementDetails } from "@/data/client-modal/clientProfileData";
import { comments } from "@/data/Comments";
import { CommentCard } from "@/components/CommentCard";
import { progressCardData } from "@/data/progressCardData";
import { ProgressCard } from "@/components/ProgressCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import planIcon from "@/public/assets/icons/plan-icon.svg";

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
          {/* Care Plan Card */}
          <Card className="p-4 space-y-4">
            <CardHeader className="flex flex-row items-center gap-2 p-0">
              {/* <ClipboardList className="w-5" /> */}
              <Image src={planIcon} alt="plan-icon" width={25} height={25} />
              <CardTitle className="-mt-[6px] text-h6">Care Plan</CardTitle>
            </CardHeader>
            <div className="h-[1px] bg-neutral-4 w-full"></div>
            <CardContent className="space-y-4 p-0">
              <div className="flex text-tagline justify-between items-center">
                <span className=" text-neutral-7">Plan name :</span>
                <span className="text-neutral-11 font-medium">02/12/2022</span>
              </div>
              <Separator />
              <div className="flex text-tagline justify-between items-center">
                <span className=" text-neutral-7">Price :</span>
                <span className="text-neutral-11 font-medium">02/12/2022</span>
              </div>
              <Separator />
              <div className="flex text-tagline justify-between items-center">
                <span className=" text-neutral-7">Care hours :</span>
                <span className="text-neutral-11 font-medium">36</span>
              </div>
              <Separator />
              <p className="text-small-text text-neutral-8 ">
                Lorem ipsum dolor sit amet consectetur. Interdum sed vitae
                aliquet eget.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="careReq" className="m-0">
          <div className="space-y-4">
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
            <div className="flex gap-4">
              <SectionCard
                title={"Patient Progress"}
                icon={personalDetailsIcons}
                className="flex p-4 flex-col gap-3 bg-small-card border-neutral-3 w-3/6"
              >
                <div className="flex flex-col gap-4 w-full">
                  {progressCardData.map((card) => (
                    <ProgressCard key={card.id} data={card} />
                  ))}
                </div>
              </SectionCard>

              <SectionCard
                title={"Caregiver Notes"}
                icon={personalDetailsIcons}
                className="flex p-4 flex-col gap-3 bg-small-card border-neutral-3 w-full h-fit"
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
