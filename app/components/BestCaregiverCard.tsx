"use client";
import Image from "next/image";
import photo from "../../public/images/photo.png";
import { Month } from "@/types/CardTypes";
import { useState } from "react";
import SelectTime from "./SelectTime";
import BCTable from "./BCTable";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export default function BestCaregiverCard() {
  const [selectedYear, setSelectedYear] = useState("oct-2024");
  return (
    <div>
      <div className="rounded-regular bg-small-card border-[1px] border-neutral-3  border-solid overflow-hidden flex flex-row items-start justify-start py-3 px-4">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="w-full flex flex-row items-center justify-start justify-between gap">
            <div className="relative leading-[110%] text-h6 ">
              <p> Best Caregivers</p>
            </div>
            <div className=" bg-whitesmoke-200 flex flex-row items-center justify-center p-[0.625rem] text-[0.875rem] text-colors-grey">
              <SelectTime
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                data={months}
              />
            </div>
          </div>

          <div className="self-stretch flex flex-row items-center justify-center gap-[1.25rem] text-[0.75rem] text-neutral-colors-neutral-7">
            <div className="w-[20.688rem] flex flex-col items-start justify-start py-[0.5rem] px-[0rem] box-border gap-[0.65rem]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative text-xsmall-text">
                    <p className="text-neutral-7 font-medium">Caregiver</p>
                  </div>
                </div>
                <div className="relative text-xsmall-text">
                  <p className="text-neutral-7 font-medium">Clinet</p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1rem] text-neutral-colors-black">
                {/* HR */}
                <div className="self-stretch relative border-lightgray border-t-[0.8px] border-solid box-border h-[0.05rem]" />

                {/*  */}
                <div className="w-full">
                  <BCTable />
                </div>
              </div>
            </div>

            <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-radius-xs bg-backgrounds-main-2 border-strokes-card-color-small border-[1px] border-solid flex flex-col items-center justify-start p-[0.5rem] gap-[1rem] text-[0.889rem] text-neutral-colors-black font-inter">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-col items-center justify-start">
                  {/* <Image
                          className="w-[6.938rem] relative h-[6.844rem]"
                          width={111}
                          height={110}
                          alt=""
                          src="Group 5.svg"
                        /> */}
                  <div className="flex flex-col items-center justify-center gap-[0.268rem]">
                    <b className="relative">95%</b>
                    <div className="relative text-[0.875rem] tracking-[0.01em] leading-[110%] font-medium font-jura text-neutral-colors-neutral-9">
                      User satisfaction
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-[0.75rem] text-neutral-colors-neutral-9 font-jura">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-[1.062rem]">
                    <div className="relative leading-[110%] font-medium">
                      Late arrivals
                    </div>
                    <div className="relative leading-[110%] font-medium">:</div>
                  </div>
                  <b className="relative text-[1rem] leading-[110%] text-neutral-colors-black">
                    0
                  </b>
                </div>
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
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-[3.375rem]">
                    <div className="relative leading-[110%] font-medium">
                      Leave
                    </div>
                    <div className="relative leading-[110%] font-medium">:</div>
                  </div>
                  <b className="relative text-[1rem] leading-[110%] text-neutral-colors-black">
                    0
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
