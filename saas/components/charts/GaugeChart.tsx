"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { SectionCard } from "../cards/SectionCard";

interface SatisfactionGaugeProps {
  value: number;
  date?: string;
  title?: string;
  color?: string;
  width?: number;
}

export default function SatisfactionGauge({
  value,
  date = "Oct 2024",
  title = "Satisfaction Rate",
  color = "#ff4b00",
  width = 400,
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
    <div>
      <div className="h-[150px] ">
        <div
          className="relative flex justify-center -mt-16"
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
              >
                <Cell fill={color} />
                <Cell fill="#e8ebee" />
              </Pie>
            </PieChart>
          </div>

          {/* Centered container for needle and pivot */}
          <div className="absolute" style={{ bottom: "0", left: "190px" }}>
            {/* Needle */}
            <div
              className="absolute bottom-0  right-0"
              style={{
                height: "80px",
                transform: `rotate(${needleAngle}deg)`,
                transformOrigin: "bottom center",
                transition: "transform 1s ease-out",
              }}
            >
              <svg
                width="5"
                height="80"
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

      <div className="text-center">
        <p className="text-[#83868e] text-lg">
          User satisfaction{" "}
          <span className="font-semibold text-foreground">{value}%</span>
        </p>
      </div>
    </div>
  );
}
