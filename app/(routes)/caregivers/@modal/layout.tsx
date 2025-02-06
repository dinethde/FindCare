import {SidebarCg} from "@/components/SidebarCg";
import {ProfileHeader} from "@/components/ProfileHeader";
import {Modal} from '@/components/ui/modal/modal'


export default function CaregiverLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (

        <Modal>
            <div className="flex gap-3 p-2 min-h-[87vh] max-h-[87vh]">
                <SidebarCg/>
                <div className="flex flex-col gap-2 w-full overflow-y-scroll pr-2">
                    <ProfileHeader/>
                    {children}
                </div>
            </div>
        </Modal>
    )
}