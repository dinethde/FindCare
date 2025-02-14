import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DayData } from "../types/ScheduleType";
import { isToday } from "../utils/DateUtils";

const TIME_COLUMN_WIDTH = 60; // pixels

interface CalendarHeaderProps {
  weekOf: string;
  days: DayData[];
  headerMargin?: number;
}

/**
 * CalendarHeader component
 *
 * Renders the header for the calendar, including navigation controls and day labels.
 *
 * @param {CalendarHeaderProps} props - The component props
 * @param {string} props.weekOf - The start date of the displayed week
 * @param {DayData[]} props.days - Array of day data for the week
 * @returns {JSX.Element} The rendered calendar header
 */
export function CalendarHeader({
  weekOf,
  days,
  headerMargin = 60,
}: CalendarHeaderProps) {
  return (
    <div className="p-4 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] flex flex-col gap-2">
      <div className="flex items-center justify-between bg-white">
        <h1 className="text-h5">{weekOf}</h1>

        {/* View toggle buttons */}
        <div className="flex items-center text-small-text gap-2 rounded-regular py-1 bg-main2 border-[0.8px] border-neutral-3 text-neutral-10">
          <Button variant="ghost" className="rounded-lg">
            Month
          </Button>
          <Button
            variant="hovBlack"
            className="bg-white rounded-lg py-0 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.1)]"
          >
            Week
          </Button>
          <Button variant="ghost" className="rounded-lg">
            Day
          </Button>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline">Today</Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Days of the week */}
      <div className="flex mt-4">
        <div style={{ width: `${headerMargin}px` }} />{" "}
        {/* Spacer for time column */}
        <div className="flex-grow grid grid-cols-7 gap-3">
          {days.map((day) => (
            <div
              key={day.day}
              className={`text-center p-2 py-4 rounded-lg flex justify-end items-center flex-col border border-neutral-3 ${
                isToday(day.fullDate) ? "bg-[#191919] text-white" : "bg-main2"
              }`}
            >
              <div className="text-small-text w-fit">{day.day}</div>
              <div className="text-h4 font-semibold w-fit">{day.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
