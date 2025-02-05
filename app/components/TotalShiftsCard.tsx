import React from "react";

export default function TotalShiftsCard() {
  return (
    <div className="big-card self-stretch overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[1rem] h-full">
      <div className="self-stretch h-[2.188rem] flex flex-row items-center justify-between">
        <div className="relative leading-[110%] font-medium">Total Shifts</div>
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
  );
}
