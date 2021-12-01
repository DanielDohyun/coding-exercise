//* Get time difference between two dates or hours
export const getTimeDifference = (start: Date | string, end: Date | string) => {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // converting milliseconds to hr, and day
  const oneHour = 1000 * 60 * 60;
  const oneDay = oneHour * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  if (diffInTime >= oneDay) {
    const diffInDays = Math.round(diffInTime / oneDay);
    return { diff: diffInDays, unit: "days" };
  } else {
    const diffInHours = Math.round(diffInTime / oneHour);
    return { diff: diffInHours, unit: "hours" };
  }
};
