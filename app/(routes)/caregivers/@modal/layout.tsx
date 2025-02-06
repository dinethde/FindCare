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
            <div className="flex max-h-full gap-3">
                <SidebarCg/>
                <div className="flex flex-col gap-4 w-full">
                    <ProfileHeader/>
                    {children}
                </div>
            </div>
        </Modal>
    )
}