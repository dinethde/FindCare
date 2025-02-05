"use client";
import Image from "next/image";
import photo from "../../public/images/photo.png";
import { Month } from "@/types/CardTypes";
import { useState } from "react";
import SelectTime from "../SelectTime";
import BCTable from "./BCTable";
import BCChart from "./BCChart";

const months: Month[] = [
  { value: "oct-2024", label: "Oct 2024" },
  { value: "sep-2024", label: "Sep 2024" },
  { value: "aug-2024", label: "Aug 2024" },
];

export default function BestCaregiverCard() {
  const [selectedYear, setSelectedYear] = useState("oct-2024");
  return (
    <div>
      <div className=" big-card overflow-hidden flex flex-row items-start justify-start py-3 px-4">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
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

          <div className="w-full self-stretch flex flex-row items-center justify-center  text-neutral-colors-neutral-7 gap-5">
            {/* Table */}
            <div className="w-full self-stretch flex flex-col items-start justify-start px-[0rem] box-border gap-[0.65rem]">
              <div className="w-full flex flex-row items-center justify-between">
                {/* Header */}
                <div className="flex flex-row items-center justify-start">
                  <div className="relative text-xsmall-text">
                    <p className="text-neutral-7 font-medium">Caregiver</p>
                  </div>
                </div>
                <div className="relative text-xsmall-text">
                  <p className="text-neutral-7 font-medium">Clinet</p>
                </div>
              </div>
              {/* Table body */}
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1rem] text-neutral-colors-black">
                {/* Devider*/}
                <div className="self-stretch relative border-lightgray border-t-[0.8px] border-solid box-border h-[0.05rem]" />
                {/* Table component */}
                <div className="w-full">
                  <BCTable />
                </div>
              </div>
            </div>

            {/* BC Chart */}
            <BCChart />
          </div>
        </div>
      </div>
    </div>
  );
}
