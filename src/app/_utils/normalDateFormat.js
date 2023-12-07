import {format, parseISO} from "date-fns";
export default function normalDateFormat(date) {
  const parsedDate = parseISO(date);
  const formattedDate = format(new Date(parsedDate), "P");

  return formattedDate;
}