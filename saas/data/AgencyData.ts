import type { AgencyData, AppointmentStatus } from "../types/ScheduleTypes";
import { getCurrentWeekDates } from "../utils/DateUtils";
import cg_photo from "@/public/images/photo.png";
import cl_photo from "@/public/images/photo-rovi.png";

const currentWeekDates = getCurrentWeekDates();

// Define appointment statuses with proper typing
const STATUS: {
  SUCCESSFUL: AppointmentStatus;
  LATE: AppointmentStatus;
  CANCELLED: AppointmentStatus;
} = {
  SUCCESSFUL: "successful",
  LATE: "late",
  CANCELLED: "cancelled",
};

export const agencyData: AgencyData = {
  clients: {
    "client-1": {
      id: "client-1",
      name: "Jayantha Silva",
      location: "Panadura",
      profileImage: cl_photo.src,
      tasks: [
        { id: "task-1", name: "Morning medication", completed: true },
        { id: "task-2", name: "Breakfast assistance", completed: true },
        { id: "task-3", name: "Physical therapy", completed: false },
      ],
    },
    "client-2": {
      id: "client-2",
      name: "Dineth Silva",
      location: "Panadura",
      profileImage: cl_photo.src,
      tasks: [
        { id: "task-4", name: "Medication reminder", completed: true },
        { id: "task-5", name: "Lunch preparation", completed: true },
      ],
    },
    "client-3": {
      id: "client-3",
      name: "Rovind Silva",
      location: "Panadura",
      profileImage: cl_photo.src,
      tasks: [
        { id: "task-6", name: "Evening walk", completed: true },
        { id: "task-7", name: "Dinner assistance", completed: false },
      ],
    },
    "client-4": {
      id: "client-4",
      name: "Benali Silva",
      location: "Galle",
      profileImage: cl_photo.src,
      tasks: [
        { id: "task-8", name: "Grocery shopping", completed: true },
        { id: "task-9", name: "House cleaning", completed: true },
      ],
    },
    "client-5": {
      id: "client-5",
      name: "Benali Perera",
      location: "Panadura",
      profileImage: cl_photo.src,
      tasks: [
        { id: "task-10", name: "Appointment scheduling", completed: true },
        { id: "task-11", name: "Medication management", completed: false },
      ],
    },
  },
  caregivers: {
    "cg-1": { id: "cg-1", name: "Sarah Johnson", profileImage: cg_photo.src },
    "cg-2": { id: "cg-2", name: "Michael Brown", profileImage: cg_photo.src },
    "cg-3": { id: "cg-3", name: "Emily Davis", profileImage: cg_photo.src },
    "cg-4": { id: "cg-4", name: "David Wilson", profileImage: cg_photo.src },
    "cg-5": { id: "cg-5", name: "Lisa Taylor", profileImage: cg_photo.src },
  },
  schedule: {
    weekOf: currentWeekDates[0],
    days: currentWeekDates.map((date, index) => ({
      date,
      appointments: [
        // Monday
        ...(index === 0
          ? [
              {
                id: "appt-1",
                startTime: "04:00",
                endTime: "06:00",
                caregiverId: "cg-1",
                clientId: "client-1",
                status: STATUS.SUCCESSFUL,
              },
              {
                id: "appt-2",
                startTime: "10:00",
                endTime: "15:00",
                caregiverId: "cg-2",
                clientId: "client-2",
                status: STATUS.CANCELLED,
              },
              {
                id: "appt-3",
                startTime: "16:30",
                endTime: "18:00",
                caregiverId: "cg-3",
                clientId: "client-3",
                status: STATUS.LATE,
              },

              {
                id: "appt-4",
                startTime: "20:30",
                endTime: "22:00",
                caregiverId: "cg-3",
                clientId: "client-3",
                status: STATUS.LATE,
              },
            ]
          : []),
        // Tuesday
        ...(index === 1
          ? [
              {
                id: "appt-4",
                startTime: "06:00",
                endTime: "08:00",
                caregiverId: "cg-1",
                clientId: "client-3",
                status: STATUS.SUCCESSFUL,
              },
              {
                id: "appt-5",
                startTime: "10:00",
                endTime: "16:00",
                caregiverId: "cg-2",
                clientId: "client-1",
                status: STATUS.CANCELLED,
              },
              {
                id: "appt-6",
                startTime: "15:00",
                endTime: "16:00",
                caregiverId: "cg-3",
                clientId: "client-4",
                status: STATUS.LATE,
              },
            ]
          : []),
        // Wednesday to Sunday
        ...(index >= 2
          ? [
              {
                id: `appt-${index + 6}`,
                startTime: ["10:00", "08:00", "04:00", "09:00", "08:00"][
                  index - 2
                ],
                endTime: ["18:00", "16:00", "08:00", "11:00", "15:00"][
                  index - 2
                ],
                caregiverId: [`cg-1`, `cg-2`, `cg-3`, `cg-4`, `cg-5`][
                  index - 2
                ],
                clientId: [
                  `client-2`,
                  `client-3`,
                  `client-1`,
                  `client-4`,
                  `client-5`,
                ][index - 2],
                status: STATUS.SUCCESSFUL,
              },
            ]
          : []),
      ],
    })),
  },
};
