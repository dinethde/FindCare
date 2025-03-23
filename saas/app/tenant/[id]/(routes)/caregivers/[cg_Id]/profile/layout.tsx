import { Modal } from "@/components/ui/modal/modal";
import { ProfileHeader } from "@/components/ProfileHeader";
import { SidebarCg } from "@/components/layout-components/SidebarCg";
import React from "react";

interface ProfileParams {
  id: string;
  cg_Id: string;
}

export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<ProfileParams>;
}) {
  const resolvedParams = await params;
  const dynamicPath = `/tenant/${resolvedParams.id}/caregivers`;

  return (
    <div>
      <Modal routePath={dynamicPath}>
        <div className="flex gap-3 p-2 min-h-[87vh] max-h-[87vh]">
          <SidebarCg />
          <div className="flex flex-col gap-2 w-full overflow-y-scroll pr-2">
            <ProfileHeader />
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
}