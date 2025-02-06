"use client"

import {SidebarCg} from "@/components/SidebarCg"
import {ProfileHeader} from "@/components/ProfileHeader"
import {Metrics} from "@/components/metrics"
import {profile, shiftStats, lateArrivals} from "@/data/dashboard-2"
import {Tabs, TabsContent} from "@/components/ui/tabs"
import {Modal} from "@/components/ui/modal/modal";
import Image from "next/image";
import photo from "@/public/images/photo.png"
import Card from "@/components/Card"

export default function CaregiverOverview() {
    return (

        <Tabs defaultValue="overview">
            <TabsContent value="overview" className="flex flex-col gap-4 w-full">
                {/* Top Row */}
                <div className="grid grid-cols-[0.75fr_1.25fr_1fr]  gap-4">
                    <div className="h-full overflow-hidden border-solid box-border border-neutral-4 rounded-small ">
                        {/*Profile Image*/}
                        <Image
                            src={photo}
                            alt={profile.name}
                            className="object-cover max-h-[270px]"
                        />
                    </div>

                    {/*/!* Description *!/*/}
                    <div className="h-full">
                        <p className="h-full w-full relative rounded-small bg-small-card border-[1px] border-solid box-border border-neutral-4  overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-left text-[0.875rem] text-colors-grey-darker font-plus-jakarta-sans">
                            {profile.about ?? "No about has written for this user"}
                        </p>
                    </div>

                    <div className="">
                        {/*/!* Stats Container *!/*/}
                        <div className="flex gap-4 flex-col">
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Metrics */}
                <Metrics/>
            </TabsContent>

            <TabsContent value="general">
                <div className="bg-white rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">General Information</h3>
                    <p className="text-muted-foreground">General information content will be displayed
                        here.</p>
                </div>
            </TabsContent>

            <TabsContent value="security">
                <div className="bg-white rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Security Settings</h3>
                    <p className="text-muted-foreground">Security settings and information will be
                        displayed
                        here.</p>
                </div>
            </TabsContent>
        </Tabs>

    )
}
