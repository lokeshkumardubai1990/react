import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import differenceInCalendarMonths from "date-fns/differenceInCalendarMonths";

export const DEFAULT_YEAR_ITEM_NUMBER = 12;
// ** Date Math **
// *** Addition ***

export { addMonths };

// *** Subtraction ***

export { subMonths };

export function monthDisabledAfter(day, { maxDate, includeDates } = {}) {
  const nextMonth = addMonths(day, 1);
  return (
          (maxDate && differenceInCalendarMonths(nextMonth, maxDate) > 0) ||
    (includeDates &&
      includeDates.every(
        (includeDate) => differenceInCalendarMonths(nextMonth, includeDate) > 0
      )) ||
    false
  );
}

export function monthDisabledBefore(day, { minDate, includeDates } = {}) {
  const previousMonth = subMonths(day, 1);
  return (
    (minDate && differenceInCalendarMonths(minDate, previousMonth) > 0) ||
    (includeDates &&
      includeDates.every(
        (includeDate) =>
          differenceInCalendarMonths(includeDate, previousMonth) > 0
      )) ||
    false
  );
}
