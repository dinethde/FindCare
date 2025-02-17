"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { SectionCard } from "../cards/SectionCard";
import SelectTime from "../cards/SelectTime";

interface SatisfactionGaugeProps {
  value: number;
  valueClass?: string;
  date?: string;
  title?: string;
  isTitleVisible?: boolean;
  color?: string;
  width?: number;
  caption?: string;
  isCaptionVisible?: boolean;
  isSelectTimeVisible?: boolean;
}

export default function SatisfactionGauge({
  value,
  date = "Oct 2024",
  title = "Satisfaction Rate",
  color = "#ff4b00",
  width = 400,
  isCaptionVisible = true,
  isTitleVisible = true,

  isSelectTimeVisible = false,
}: SatisfactionGaugeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const data = [
    { name: "progress", value: value },
    { name: "remaining", value: 100 - value },
  ];

  // Calculate needle angle based on value (0-100)
  const needleAngle = -90 + (value / 100) * 180;

  return (
    <div className="w-full">
      <Card
        className={` p-6 transition-all duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} space-y-6 p-4 bg-[#FCFDFD] w-full flex flex-col justify-center  items-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          boxShadow: isHovered
            ? "0 4px 20px rgba(0, 0, 0, 0.1)"
            : "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {isTitleVisible && (
          <div className="flex items-center justify-between w-full">
            <h3 className="text-h6 text-neutral-11 w-full">{title}</h3>
            {isSelectTimeVisible && <SelectTime />}
          </div>
        )}

        <div className="max-w-[280px] relative p-4 overflow-hidden">
          <div
            className="flex justify-center -mt-20"
            style={{ height: "200px" }}
          >
            <div className="">
              <PieChart width={400} height={200}>
                <Pie
                  data={data}
                  cx={200}
                  cy={200}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={100}
                  outerRadius={120}
                  paddingAngle={0}
                  dataKey="value"
                  cornerRadius={5}
                >
                  <Cell fill={color} />
                  <Cell fill="#e8ebee" />
                </Pie>
              </PieChart>
            </div>
            {/* Centered container for needle and pivot */}
            <div className="absolute" style={{ bottom: "18px", left: "150px" }}>
              {/* Needle */}
              <div
                className="absolute bottom-0 right-0 "
                style={{
                  height: "85px",
                  transform: `rotate(${needleAngle}deg)`,
                  transformOrigin: "bottom center",
                  transition: "transform 1s ease-out",
                }}
              >
                <svg
                  width="5"
                  height="85"
                  viewBox="0 0 5 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.5 0L5 120H0L2.5 0Z" fill={color} />
                </svg>
              </div>

              {/* Pivot */}
              <div
                className="absolute h-3 w-3 rounded-full"
                style={{
                  backgroundColor: color,
                  boxShadow: "0 0 4px rgba(255, 75, 0, 0.3)",
                  bottom: "0",
                  left: "0",
                  transform: "translate(-50%, 50%)",
                }}
              />
            </div>
          </div>
        </div>

        {isCaptionVisible && (
          <div className="text-center w-full">
            <p className="text-neutral-8 text-regular-text">
              User satisfaction{" "}
              <span className="text-h5 text-foreground ml-1">{value}%</span>
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
