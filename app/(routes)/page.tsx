"use client";

import Image from "next/image";
import "../globals.css";
import Card from "../components/Card";

export default function Home() {
  return (
    <h1 className="">
      <div>
        <div className="w-full relative flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1.25rem] text-neutral-colors-neutral-11 font-small-text">
          <div className="self-stretch flex-1 rounded-lg bg-backgrounds-small-card border-strokes-card-color-small border-[0.8px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[1.25rem] px-[0.75rem] pb-[0rem] gap-[1.25rem]">
            {/* <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex-1 relative leading-[110%] font-medium">
                Total Revenue
              </div>
              <div className="rounded bg-whitesmoke flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem] text-colors-grey">
                <div className="relative tracking-[0.01em] leading-[110%] font-medium">
                  Oct 2024
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem] text-[1.5rem] text-black">
              <Image
                className="w-[1.881rem] relative h-[1.881rem]"
                width={30}
                height={30}
                alt=""
                src="Group 288704.svg"
              />
              <b className="relative tracking-[-0.03em] leading-[110%]">
                560,000 LKR
              </b>
            </div> */}
            <Card
              revenue={560000}
              selectedMonth="oct-2024"
              onMonthChange={(month) => console.log(month)}
            />
          </div>
        </div>
      </div>
    </h1>
  );
}
