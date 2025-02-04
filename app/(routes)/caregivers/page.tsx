import Image from "next/image";
import photo from "../../../public/images/photo.png";
import BestCaregiverCard from "@/app/components/BestCaregiverCard";

export default function CaregiverPage() {
  return (
    <div>
      <div>
        <div>
          <div className="w-full relative flex flex-row items-start justify-start gap-[1rem] text-left text-[1.25rem] text-neutral-colors-black font-h6">
            <div>
              <BestCaregiverCard />
            </div>

            <div className="self-stretch w-[19.65rem] rounded-radius-regular bg-backgrounds-small-card border-strokes-card-color-small border-[0.8px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-[0.625rem] px-[1rem] gap-[1rem]">
              <div className="self-stretch h-[2.188rem] flex flex-row items-center justify-between">
                <div className="relative leading-[110%] font-medium">
                  Total Shifts
                </div>
                <div className="rounded bg-whitesmoke-200 flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem] text-colors-grey">
                  <div className="relative tracking-[0.01em] leading-[110%] font-medium">
                    Oct 2024
                  </div>
                </div>
              </div>
              <div className="w-[10.75rem] flex flex-col items-center justify-start gap-[1.25rem] text-[0.875rem] text-neutral-colors-neutral-7 font-jura">
                <div className="w-[10.75rem] relative h-[10.75rem]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-orange w-[10.75rem] h-[10.75rem]" />
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-support-color-1 w-[10.75rem] h-[10.75rem]" />
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-brand-main w-[10.75rem] h-[10.75rem]" />
                  <div className="absolute top-[3.5rem] left-[1.813rem] w-[7.119rem] h-[3.738rem] flex flex-col items-center justify-start gap-[0.312rem]">
                    <b className="relative leading-[110%]">Total Shifts</b>
                    <div className="relative text-[2rem] leading-[110%] font-medium font-h6 text-neutral-colors-black">
                      115
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem] text-colors-grey font-h6">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0.375rem]">
                    <div className="w-[0.713rem] relative rounded-[2.85px] bg-support-color-1 h-[0.713rem]" />
                    <div className="relative tracking-[0.01em] leading-[110%] font-medium">
                      5 late shifts
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0.375rem]">
                    <div className="w-[0.713rem] relative rounded-[2.85px] bg-orange h-[0.713rem]" />
                    <div className="flex-1 relative tracking-[0.01em] leading-[110%] font-medium">
                      3 Cancelled shits
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[1rem]">
              <div className="w-[19.65rem] rounded-radius-small bg-backgrounds-small-card border-strokes-card-color-small border-[0.8px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0.75rem] pb-[1.5rem] gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[110%] font-medium">
                    Active Caregivers
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem] text-[1.5rem]">
                  {/* <Image
                    className="w-[1.881rem] relative h-[1.881rem]"
                    width={30}
                    height={30}
                    alt=""
                    src="Group 288704.svg"
                  /> */}
                  <div className="relative leading-[110%]">
                    <b className="tracking-[-0.03em]">20/</b>
                    <span className="text-[0.875rem] tracking-[0.01em] font-medium text-gray">
                      24
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-radius-small bg-backgrounds-small-card border-strokes-card-color-small border-[0.8px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0.75rem] pb-[1.5rem] gap-[1.5rem]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[110%] font-medium">
                    All Time Care efficiency
                  </div>
                </div>
                {/* <Image
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  width={330}
                  height={57}
                  alt=""
                  src="Graph.svg"
                /> */}
                <div className="self-stretch relative text-[0.875rem] tracking-[0.01em] leading-[110%] font-medium text-colors-grey">
                  Care efficiency has down 5% this month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
