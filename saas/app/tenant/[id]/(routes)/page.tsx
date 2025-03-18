"use client";

import Card from "@/components/cards/Card";
import SatisfactionGauge from "@/components/charts/GaugeChart";
import { GrowthChart } from "@/components/charts/growth-chart";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const user = useUser();
  console.log("User data:", user.user);

  useEffect(() => {
    if (user.user) {
      // Call your Spring Boot API to create a new user record.
      // Ensure that your backend is configured to accept requests from your frontend domain.
      fetch("http://localhost:8081/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.user.id,
          username: user.user.username || user.user.firstName,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to create user");
          }
          return res.json();
        })
        .then((data) => console.log("User created in backend:", data))
        .catch((error) =>
          console.error("Error calling backend API for user creation:", error)
        );
    }
  }, [user.user]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="w-full relative flex flex-row items-start justify-start gap-[1.25rem] text-left text-[1.25rem] text-neutral-colors-neutral-11 font-small-text">
          <div className="w-full flex gap-4 ">
            <Card revenue={560000} />

            <Card
              revenue={24}
              dataType=""
              title="Total Caregivers"
              color="#FF2D55"
            />

            <Card
              revenue={36}
              dataType=""
              title="Total Clients"
              color="#007AFF"
            />

            <Card revenue={560000} title="Total Shifts" color="#FF2D55" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_0.75fr] gap-4">
        <GrowthChart />
        <SatisfactionGauge
          value={95}
          date="Oct 2024"
          title="Agency's Satisfaction Rate"
        />
      </div>
      <div className="flex min-h-screen items-center justify-center p-4 bg-background"></div>
    </div>
  );
}
