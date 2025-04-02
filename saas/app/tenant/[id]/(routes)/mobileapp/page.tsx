import CaregiverMobileAppView from "./@caregiver_app_view/page";
import CaregiverListMobileApp from "./@caregivers_list/page";


export default function MobileAppPage() {


  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full grid grid-cols-[1.5fr_.5fr] gap-4 ">
        <div className="w-full">
          <CaregiverListMobileApp />
        </div>
        <CaregiverMobileAppView />
      </div>
    </div>
  )
}

