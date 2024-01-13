import {format, parseISO} from "date-fns";

// 	Apr 29, 1453
export function calendarDateFormat(date) {
  const parsedDate = parseISO(date);
  const formattedDate = format(new Date(parsedDate), "PP");
  return formattedDate;
}

// 2023-05-15
export function numDateFormat(date) {
  const parsedDate = parseISO(date);
  const formattedDate = format(new Date(parsedDate), "yyyy-MM-dd");

  return formattedDate;
}
