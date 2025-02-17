import CaregiverDescription from "@/components/CaregiverDescription";
import CaregiverImg from "@/components/CaregiverImg";
import Card from "@/components/cards/Card";
import React from "react";
import clientImage from "@/public/images/photo-rovi.png";
import SatisfactionGauge from "@/components/charts/GaugeChart";

export default function clientModalOverview() {
  return (
    <div className=" mt-6 flex flex-col gap-4">
      <div className="grid grid-cols-[0.75fr_1.25fr_1fr] gap-4 h-[250px] ">
        <CaregiverImg image={clientImage.src} imgSize={260} />

        {/*/!* Description *!/*/}
        <CaregiverDescription />

        <div className="">
          {/*/!* Status Container *!/*/}
          <div className="flex gap-4 flex-col ">
            <Card
              title="Primary Caregiver"
              color="#FF2D55"
              btnVarient="seeMore"
              revenue={"Dineth Silva"}
              dataType=""
            />
            <Card
              title="Agreement"
              btnVarient="seeMore"
              revenue={"04/07/2022  -  04/09/2022"}
              contentClassName="text-regular-text-thicker text-neutral-12"
              dataType=""
            />
          </div>
        </div>
      </div>
      {/* 95% Satisfaction Rate */}
      <div className="max-w-[400px] h-[]">
        <SatisfactionGauge
          value={95}
          date="Oct 2024"
          title=" Care Satisfaction Rate"
        />
      </div>
    </div>
  );
}
