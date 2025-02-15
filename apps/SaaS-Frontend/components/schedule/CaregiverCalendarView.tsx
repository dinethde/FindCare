"use client";

import { useState } from "react";
import { Calendar } from "./Calendar";
import type { AgencyData } from "@/types/ScheduleTypes";
import Image from "next/image";
import Card from "../cards/Card";

interface CaregiverCalendarViewProps {
  agencyData: AgencyData;
  selectedCaregiverId: string;
}

export function CaregiverCalendarView({
  agencyData,
  selectedCaregiverId,
}: CaregiverCalendarViewProps) {
  // Get all unique clients for this caregiver
  const caregiverClients = Object.values(agencyData.clients).filter((client) =>
    agencyData.schedule.days.some((day) =>
      day.appointments.some(
        (appt) =>
          appt.caregiverId === selectedCaregiverId &&
          appt.clientId === client.id
      )
    )
  );

  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  // Calculate statistics
  const totalShifts = agencyData.schedule.days.reduce(
    (acc, day) =>
      acc +
      day.appointments.filter(
        (appt) => appt.caregiverId === selectedCaregiverId
      ).length,
    0
  );

  const totalHours = agencyData.schedule.days.reduce((acc, day) => {
    const caregiverAppointments = day.appointments.filter(
      (appt) => appt.caregiverId === selectedCaregiverId
    );
    return (
      acc +
      caregiverAppointments.reduce((hours, appt) => {
        const startHour = Number.parseInt(appt.startTime.split(":")[0]);
        const endHour = Number.parseInt(appt.endTime.split(":")[0]);
        return hours + (endHour - startHour);
      }, 0)
    );
  }, 0);

  return (
    <div className="flex gap-4 w-full">
      <div className="w-full">
        <Calendar
          agencyData={agencyData}
          view="caregiver"
          selectedId={selectedCaregiverId}
          selectedClientId={selectedClientId}
        />
      </div>
      <div className="flex flex-col gap-6 w-64 ">
        {/* Clients List */}
        <div className="bg-white rounded-regular shadow-[0px_0px_4px_rgba(0,_0,_0,_0.20)] flex flex-col gap-2 p-3">
          <h3 className="text-h6 text-neutral-10">Clients</h3>
          <div className="space-y-2">
            {caregiverClients.map((client) => (
              <button
                key={client.id}
                className={`w-full flex items-center gap-2 p-2 rounded-lg  transition-colors m-0 ${
                  selectedClientId === client.id
                    ? "bg-[#FFF5E6] border-2 border-brand-colors-brand5 shadow-[0px_3px_4px_rgba(0,_0,_0,_0.10)]"
                    : "border-[1px] bg-main2 border-neutral-3 "
                }`}
                onClick={() =>
                  setSelectedClientId(
                    client.id === selectedClientId ? null : client.id
                  )
                }
              >
                <Image
                  src={client.profileImage || "/placeholder.svg"}
                  alt={client.name}
                  width={25}
                  height={25}
                  className="rounded-full w-11 h-11"
                />
                <div className="flex-1 text-left space-y-1">
                  <div
                    className="text-regular-text-thicker truncate text-neutral-10"
                    title={client.name}
                  >
                    {client.name}
                  </div>
                  <div className="text-tagline text-neutral-8">
                    {client.location}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Total Metrics */}
        <div className="space-y-2">
          {/**/}
          <h4 className="text-h6 text-neutral-10"> Shift Overview </h4>
          <div className="space-y-3">
            <Card
              dataType={""}
              revenue={totalShifts}
              title={"Total Shifts"}
              isButtonVisible={false}
            />

            <Card
              dataType={""}
              revenue={totalHours}
              title={"Total Care Hours"}
              isButtonVisible={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
