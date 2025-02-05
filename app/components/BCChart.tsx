export default function BCChart() {
  return (
    <div>
      <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-radius-xs bg-main2 border-neutral-3 rounded-sm border-[0.8px] border-solid flex flex-col items-center justify-start p-3 gap-4">
        {/* Chart Wrapper */}
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-col items-center justify-start">
            {/* Chart */}

            {/* Total satisfaction wrapper */}
            <div className="flex flex-col items-center justify-center gap-1 text-regular-text">
              <p className="font-bold">95%</p>
              <div className="text-[0.875rem] leading-[110%] font-medium font-jura text-neutral-colors-neutral-9 center content-center text-center">
                User satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Info wrapper */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.75rem] text-neutral-colors-neutral-9 font-jura">
          {/* Single Info wrapper */}
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[1.062rem]">
              <div className="self-stretch relative leading-[110%] font-medium">
                Late arrivals :
              </div>
            </div>
            <b className="relative text-[1rem] leading-[110%] text-neutral-colors-black">
              0
            </b>
          </div>

          {/* Single Info wrapper */}
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[0.625rem]">
              <div className="relative leading-[110%] font-medium">
                Cancel Shifts
              </div>
              <div className="relative leading-[110%] font-medium">:</div>
            </div>
            <b className="relative text-[1rem] leading-[110%] text-neutral-colors-black">
              0
            </b>
          </div>

          {/* Single Info wrapper */}
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[3.375rem]">
              <div className="relative leading-[110%] font-medium">Leave</div>
              <div className="relative leading-[110%] font-medium">:</div>
            </div>
            <b className="relative text-[1rem] leading-[110%] text-neutral-colors-black">
              0
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
