import CaregiverDescription from "@/components/CaregiverDescription";
import CaregiverImg from "@/components/CaregiverImg";
import Card from "@/components/cards/Card";
import React from "react";
import clientImage from "@/public/images/photo-rovi.png";

export default function clientModalOverview() {
  return (
    <div>
      <div className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4 h-[250px]">
        <CaregiverImg image={clientImage.src} imgSize={260} />

        {/*/!* Description *!/*/}
        <CaregiverDescription />

        <div className="">
          {/*/!* Status Container *!/*/}
          <div className="flex gap-4 flex-col ">
            <Card btnVarient="seeMore" />
            <Card color="#FF2D55" btnVarient="seeMore" />
          </div>
        </div>
      </div>
    </div>
  );
}
