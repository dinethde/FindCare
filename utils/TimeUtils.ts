export const HOUR_HEIGHT = 60 // pixels per hour
export const DAY_START_HOUR = 4 // 4 AM
export const TOTAL_HOURS = 24

export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

export function calculateEventPosition(
  startTime: string,
  endTime: string,
): {
  top: number
  height: number
} {
  const startMinutes = timeToMinutes(startTime)
  const endMinutes = timeToMinutes(endTime)

  // Convert to relative position from day start (4 AM)
  const startFromDayStart = startMinutes - DAY_START_HOUR * 60
  const duration = endMinutes - startMinutes

  // Convert to pixels
  const top = (startFromDayStart / 60) * HOUR_HEIGHT
  const height = (duration / 60) * HOUR_HEIGHT

  return { top, height }
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":")
  const hour = Number.parseInt(hours, 10)
  const ampm = hour >= 12 ? "PM" : "AM"
  const formattedHour = hour % 12 || 12
  return `${formattedHour}:${minutes} ${ampm}`
}

