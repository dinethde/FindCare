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

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" })
}

export function getDayName(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "long" })
}

export function isToday(date: Date): boolean {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

