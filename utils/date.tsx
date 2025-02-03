export function getCurrentMonthData() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // Get all months up to current month for current year
  const monthsCurrentYear = Array.from(
    { length: currentMonth + 1 },
    (_, index) => {
      const date = new Date(currentYear, index);
      return date.toLocaleString("default", { month: "short" });
    }
  );

  // Get all months for past years
  const allMonths = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(2000, index);
    return date.toLocaleString("default", { month: "short" });
  });

  return {
    currentYear,
    monthsCurrentYear,
    allMonths,
  };
}

export function generateRandomData(
  months: string[],
  baseValue = 4,
  variance = 2
) {
  return months.map((month) => ({
    month,
    total: baseValue + Math.random() * variance,
  }));
}
