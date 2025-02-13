"use client"

import { useState } from "react"
import { Calendar } from "./Calendar"
import type { AgencyData } from "../types/ScheduleTypes"
import Image from "next/image"

interface CaregiverCalendarViewProps {
  agencyData: AgencyData
  selectedCaregiverId: string
}

export function CaregiverCalendarView({ agencyData, selectedCaregiverId }: CaregiverCalendarViewProps) {
  // Get all unique clients for this caregiver
  const caregiverClients = Object.values(agencyData.clients).filter((client) =>
    agencyData.schedule.days.some((day) =>
      day.appointments.some((appt) => appt.caregiverId === selectedCaregiverId && appt.clientId === client.id),
    ),
  )

  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)

  // Calculate statistics
  const totalShifts = agencyData.schedule.days.reduce(
    (acc, day) => acc + day.appointments.filter((appt) => appt.caregiverId === selectedCaregiverId).length,
    0,
  )

  const totalHours = agencyData.schedule.days.reduce((acc, day) => {
    const caregiverAppointments = day.appointments.filter((appt) => appt.caregiverId === selectedCaregiverId)
    return (
      acc +
      caregiverAppointments.reduce((hours, appt) => {
        const startHour = Number.parseInt(appt.startTime.split(":")[0])
        const endHour = Number.parseInt(appt.endTime.split(":")[0])
        return hours + (endHour - startHour)
      }, 0)
    )
  }, 0)

  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <Calendar
          agencyData={agencyData}
          view="caregiver"
          selectedId={selectedCaregiverId}
          selectedClientId={selectedClientId}
        />
      </div>
      <div className="w-80 flex flex-col gap-6">
        {/* Clients List */}
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <h3 className="text-xl font-semibold mb-4">Clients</h3>
          <div className="space-y-3">
            {caregiverClients.map((client) => (
              <button
                key={client.id}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  selectedClientId === client.id ? "bg-[#FFF5E6] border-2 border-[#FF9966]" : "hover:bg-gray-50"
                }`}
                onClick={() => setSelectedClientId(client.id === selectedClientId ? null : client.id)}
              >
                <Image
                  src={client.profileImage || "/placeholder.svg"}
                  alt={client.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1 text-left space-y-0.5">
                  <div className="font-semibold truncate" title={client.name}>
                    {client.name}
                  </div>
                  <div className="text-sm text-gray-500">{client.location}</div>
                  <div className="text-xs text-gray-400">Mon - Tue 6-8</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Shift Statistics */}
        <div className="bg-white rounded-xl p-4 border border-neutral-200">
          <h3 className="text-xl font-semibold mb-4">Shift Statistics</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 rounded bg-[#ddffda]">
              <span className="text-[#00b829]">Successful</span>
              <span className="ml-auto font-semibold">05</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-[#feebcd]">
              <span className="text-[#fca827]">Late Arrivals</span>
              <span className="ml-auto font-semibold">02</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-[#ffccd6]">
              <span className="text-[#ff2d55]">Cancelled</span>
              <span className="ml-auto font-semibold">01</span>
            </div>
          </div>
        </div>

        {/* Total Metrics */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#FFF5E6]">
                <div className="w-6 h-6 rounded-full bg-[#FF6619]" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Total Shifts</div>
                <div className="text-2xl font-semibold">{totalShifts}</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-neutral-200">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-[#FFF5E6]">
                <div className="w-6 h-6 rounded-full bg-[#FF6619]" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Total Hours</div>
                <div className="text-2xl font-semibold">{totalHours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

