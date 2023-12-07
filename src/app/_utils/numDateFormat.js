import { format, parseISO } from "date-fns";
export default function numFormatDate(date) {
  const parsedDate = parseISO(date);
  const formattedDate = format(new Date(parsedDate), "yyyy-MM-dd");

  return formattedDate;
}
