import {format, parseISO, parse, parseJSON} from "date-fns";

// 	Apr 29, 1453
export function calendarDateFormat(date) {
  if (!date) {
    return null;
  }
  const parsedISODate = parseISO(date);
  const formattedDate = format(new Date(parsedISODate), "PP");
  return formattedDate;
}

// 2023-05-15
export function numDateFormat(date) {
  const parsedISODate = parseISO(date);
  const formattedDate = format(new Date(parsedISODate), "yyyy-MM-dd");

  return formattedDate;
}
