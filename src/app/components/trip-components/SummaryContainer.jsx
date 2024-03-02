import {calendarDateFormat} from "../../_utils/dateFormatterIndex";
export default function SummaryContainer({ trip }) {
  const tripStartDate = calendarDateFormat(trip.tripStartDate);
  const tripEndDate = calendarDateFormat(trip.tripEndDate);
  return (
    <div id={trip._id} className="flex flex-col max-w-[400px] max-h-40">
      <div className="flex flex-col flex-wrap">
        <p className="text-peach-500  text-4xl font-semibold">{trip.tripName}</p>
      </div>
      <p className="text-peach-400  text-2xl font-semibold">
        {tripStartDate} - {tripEndDate}
      </p>
      <p>Destination: {trip.tripDestination}</p>
      <p>Reason: {trip.tripReason}</p>
      <p>Number of Travelers: {trip.tripGuests}</p>
    </div>
  );
}
