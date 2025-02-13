export function getCurrentWeekDates(): Date[] {
  const today = new Date()
  const currentDay = today.getDay()
  const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1) // Adjust when Sunday

  return Array(7)
    .fill(0)
    .map((_, index) => {
      const day = new Date(today.setDate(diff + index))
      return new Date(day.getFullYear(), day.getMonth(), day.getDate())
    })
}

/**
 * Formats a Date object to a string with month and day
 *
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "August 15")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" })
}

/**
 * Gets the name of the day for a given Date
 *
 * @param {Date} date - The date to get the day name for
 * @returns {string} The name of the day (e.g., "Monday")
 */
export function getDayName(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "long" })
}

/**
 * Checks if a given date is today
 *
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is today, false otherwise
 */
export function isToday(date: Date): boolean {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

