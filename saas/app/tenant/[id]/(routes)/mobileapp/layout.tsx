export default function Layout({
    // children,
    CaregiverMobileAppView,
    CaregiverListMobileApp,
}: {
    children: React.ReactNode
    CaregiverMobileAppView: React.ReactNode
    CaregiverListMobileApp: React.ReactNode
}) {
    return (
        <>
            {/* {children} */}

            <div className="flex min-h-screen flex-col items-center justify-between">
                <div className="w-full grid grid-cols-[1.5fr_.5fr] gap-4 ">
                    <div className="w-full">
                        {CaregiverListMobileApp}
                    </div>
                    {CaregiverMobileAppView}
                </div>
            </div>
        </>
    )
}